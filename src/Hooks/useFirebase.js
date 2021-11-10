import { useEffect, useState } from "react";
import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, getIdToken, onAuthStateChanged, updateProfile, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initAuthentication from "../Firebase/firebase.init";

initAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isOnLoading, setIsOnLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    useEffect(() => {
        setIsLoading(false);
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken);
                    })
            } else {
                setUser({})
            }
            setIsOnLoading(false);

        });
        return () => unsubscribe;
    }, [])


    const registerUser = (email, password, name, location, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                // console.log(result.user);
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                const info = { ...result.user, displayName: name }
                setUser(info);

                postUserDb(result.user, name, email, 'POST')

                // const destination = location?.state?.from || '/';
                // history.replace(destination);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            })
            .finally(() => setIsLoading(false));


    }

    const postUserDb = (user, name, email, method) => {
        const newUser = { user, name, email }
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then()
    }

    const signInWithGoogle = (location, history) => {
        setIsOnLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                postUserDb(user, user.displayName, user.email, 'PUT')
                // const destination = location?.state?.from || '/';
                // history.replace(destination);

            }).catch((error) => {

            }).finally(() => setIsOnLoading(false));
    }


    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                setUser(user)
                const destination = location?.state?.from || '/';
                history.replace(destination);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAdmin(data.admin)
            })
    }, [user.email])


    const logOut = () => {
        setIsOnLoading(true);
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => {
                setIsOnLoading(false);
                setIsLoading(false)
            });
    }




    return {
        user,
        logOut,
        token,
        admin,
        registerUser,
        loginUser,
        isLoading,
        isOnLoading,
        signInWithGoogle
    }

}

export default useFirebase;