import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Theme } from '../../theme/theme';
import { useTheme } from '../../theme/ThemeProvider';
import { Typography, Card } from '../../components/Base';
import { Header } from '../../components/Header';
import { BarChart2, TrendingUp, Users, Calendar, ArrowUpRight, ArrowDownRight } from 'lucide-react-native';

const AnalyticsCard = ({ title, value, detail, trend, positive }: any) => {
    const { colors } = useTheme();
    return (
        <Card style={[styles.anaCard, { backgroundColor: colors.panel, borderColor: colors.border }] as any}>
            <View style={styles.anaHeader}>
                <Typography variant="caption" color={colors.text2}>{title}</Typography>
                <View style={[styles.trendBadge, { backgroundColor: positive ? 'rgba(34,197,94,0.12)' : 'rgba(239,68,68,0.12)' }]}>
                    {positive ? <ArrowUpRight size={12} color={colors.green} /> : <ArrowDownRight size={12} color={colors.red} />}
                    <Typography variant="caption" weight="700" style={{ color: positive ? colors.green : colors.red, fontSize: 10 }}>
                        {trend}
                    </Typography>
                </View>
            </View>
            <Typography variant="h2" style={[styles.anaValue, { color: colors.white }]}>{value}</Typography>
            <Typography variant="caption" color={colors.text3}>{detail}</Typography>
        </Card>
    );
};

const AnalyticsScreen = () => {
    const { colors } = useTheme();
    return (
        <View style={[styles.container, { backgroundColor: colors.navy }]}>
            <Header title="Analytics" subtitle="Performance insights for your practice" />

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <View style={styles.grid}>
                    <AnalyticsCard title="Total Appointments" value="482" detail="vs 412 last month" trend="+17%" positive={true} />
                    <AnalyticsCard title="New Patients" value="128" detail="vs 142 last month" trend="-10%" positive={false} />
                </View>

                <View style={styles.grid}>
                    <AnalyticsCard title="Avg. Consultation" value="18m" detail="vs 21m last month" trend="-3m" positive={true} />
                    <AnalyticsCard title="Patient Retention" value="84%" detail="vs 82% last month" trend="+2%" positive={true} />
                </View>

                <Card style={[styles.chartPlaceholder, { backgroundColor: colors.panel, borderColor: colors.border }] as any}>
                    <View style={styles.chartHeader}>
                        <BarChart2 size={20} color={colors.blue} />
                        <Typography weight="600" style={{ marginLeft: 10, color: colors.white }}>Monthly Revenue Growth</Typography>
                    </View>
                    <View style={styles.dummyChart}>
                        {[40, 60, 45, 80, 55, 90, 70].map((h, i) => (
                            <View key={i} style={[styles.chartBar, { height: h as any, backgroundColor: colors.blue }]} />
                        ))}
                    </View>
                    <View style={styles.chartLabels}>
                        {['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'].map((l) => (
                            <Typography key={l} variant="caption" color={colors.text3}>{l}</Typography>
                        ))}
                    </View>
                </Card>
                <View style={{ height: 100 }} />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContent: {
        padding: 16,
        paddingBottom: 40,
    },
    grid: {
        flexDirection: 'row',
        gap: 12,
        marginBottom: 12,
    },
    anaCard: {
        flex: 1,
        padding: 16,
    },
    anaHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    trendBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2,
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 12,
    },
    anaValue: {
        fontSize: 24,
        marginBottom: 4,
    },
    chartPlaceholder: {
        marginTop: 12,
        padding: 20,
    },
    chartHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
    },
    dummyChart: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        height: 100,
        paddingHorizontal: 10,
        marginBottom: 12,
    },
    chartBar: {
        width: 20,
        borderRadius: 4,
        opacity: 0.8,
    },
    chartLabels: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 4,
    },
});

export default AnalyticsScreen;
