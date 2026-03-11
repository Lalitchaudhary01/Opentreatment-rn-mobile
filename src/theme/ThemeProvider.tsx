import React, { createContext, useContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { Colors } from './theme';

type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
    mode: ThemeMode;
    colors: typeof Colors.dark & typeof Colors.common;
    toggleTheme: () => void;
    isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const systemScheme = useColorScheme();
    const [mode, setMode] = useState<ThemeMode>((systemScheme === 'light' || systemScheme === 'dark') ? systemScheme : 'dark');

    useEffect(() => {
        if (systemScheme === 'light' || systemScheme === 'dark') {
            setMode(systemScheme);
        }
    }, [systemScheme]);

    const toggleTheme = () => {
        setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    const colors = {
        ...Colors.common,
        ...(mode === 'light' ? Colors.light : Colors.dark),
    } as any;

    const value = {
        mode,
        colors,
        toggleTheme,
        isDark: mode === 'dark',
    };

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
