import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Home from "./home";
import Login from '../Login';

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // Added loading state
    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            try {
                if (user) {
                    setUser(user);
                } else {
                    setUser(null);
                }
            } finally {
                setLoading(false); // Set loading to false once the authentication state is determined
            }
        }, (error) => {
            console.error(error);
            setLoading(false); // Handle error and set loading to false
        });

        // Clean up the subscription when the component unmounts
        return () => unsubscribe();
    }, [auth]);

    if (loading) {
        return <p>Loading...</p>; // Render a loading indicator while waiting for authentication state
    }

    return (
       <div>
           {user ? <Home /> : <Login />}
       </div>
    );
};

export default Dashboard;
