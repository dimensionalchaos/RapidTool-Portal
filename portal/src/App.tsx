import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from './layout/MainLayout';
import MainPortal from './pages/MainPortal';
import { useAuthStore } from './stores/authStore';

const AuthCheck = ({ children }: { children: React.ReactNode }) => {
    const { fetchCurrentUser } = useAuthStore();

    useEffect(() => {
        fetchCurrentUser();
    }, []);

    return <>{children}</>;
};

function App() {
    return (
        <BrowserRouter
            future={{
                v7_startTransition: true,
                v7_relativeSplatPath: true,
            }}
        >
            <AuthCheck>
                <Routes>
                    <Route path="/" element={<MainLayout><MainPortal /></MainLayout>} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </AuthCheck>
        </BrowserRouter>
    );
}

export default App;
