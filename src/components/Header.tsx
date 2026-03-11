import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Bell, Sun, Moon, Menu } from 'lucide-react-native';
import { Colors } from '../theme/theme';
import { useTheme } from '../theme/ThemeProvider';
import { Typography } from './Base';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
    title: string;
    subtitle?: string;
    showProfile?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ title, subtitle, showProfile = true }) => {
    const { colors, toggleTheme, isDark } = useTheme();
    const navigation = useNavigation<any>();

    return (
        <View className="flex-row items-center justify-between border-b px-5 pb-[15px] pt-[50px]" style={{ backgroundColor: colors.navy2, borderBottomColor: colors.border }}>
            <View className="gap-0.5">
                <View className="flex-row items-center gap-3">
                    <TouchableOpacity
                        className="h-[38px] w-[38px] items-center justify-center rounded-[10px] border"
                        style={{ borderColor: colors.border }}
                        onPress={() => navigation.openDrawer()}
                    >
                        <Menu size={20} color={colors.text2} />
                    </TouchableOpacity>
                    <View>
                        <Typography variant="h2" color={colors.text} weight="700">{title}</Typography>
                        {subtitle && <Typography variant="caption" color={colors.text3}>{subtitle}</Typography>}
                    </View>
                </View>
            </View>
            <View className="flex-row items-center gap-3">
                <TouchableOpacity
                    className="relative h-[38px] w-[38px] items-center justify-center rounded-[10px] border"
                    style={{ borderColor: colors.border }}
                    onPress={toggleTheme}
                >
                    {isDark ? (
                        <Sun size={20} color={colors.text2} />
                    ) : (
                        <Moon size={20} color={colors.text2} />
                    )}
                </TouchableOpacity>

                <TouchableOpacity className="relative h-[38px] w-[38px] items-center justify-center rounded-[10px] border" style={{ borderColor: colors.border }}>
                    <Bell size={20} color={colors.text2} />
                    <View
                        className="absolute right-2 top-2 h-2 w-2 rounded-full border-[1.5px] bg-red-500"
                        style={{ borderColor: Colors.dark.navy2 }}
                    />
                </TouchableOpacity>

                {showProfile && (
                    <TouchableOpacity className="ml-1">
                        <View className="h-[34px] w-[34px] items-center justify-center rounded-full" style={{ backgroundColor: colors.blue }}>
                            <Typography weight="700" style={{ fontSize: 12, color: 'white' }}>RI</Typography>
                        </View>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};
