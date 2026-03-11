import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { useTheme } from '../../../theme/ThemeProvider';
import { Typography, Card } from '../../../components/Base';
import { Header } from '../../../components/Header';
import { TrendingUp, ArrowUpRight, ArrowDownRight, DollarSign, Calendar, ChevronRight } from 'lucide-react-native';

const RevenueScreen = () => {
    const { colors, isDark } = useTheme();
    const screenWidth = Dimensions.get('window').width;

    const stats = [
        { label: 'Today', value: '₹12,450', delta: '+12%', up: true },
        { label: 'Paid', value: '₹84,200', delta: '85%', up: true },
        { label: 'Pending', value: '₹14,800', delta: '15%', up: false },
    ];

    return (
        <View style={[styles.container, { backgroundColor: colors.navy }]}>
            <Header title="Revenue" subtitle="Financial overview & insights" />

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <Card style={[styles.heroCard, { backgroundColor: colors.blue }]}>
                    <View style={styles.heroHeader}>
                        <View>
                            <Typography weight="600" style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)' }}>Total Earnings (Feb)</Typography>
                            <Typography weight="700" style={{ fontSize: 32, color: 'white' }}>₹1,42,000</Typography>
                        </View>
                        <View style={styles.heroBadge}>
                            <TrendingUp size={16} color="white" />
                            <Typography weight="600" style={{ fontSize: 12, color: 'white' }}>+18.4%</Typography>
                        </View>
                    </View>
                    <View style={styles.heroDivider} />
                    <View style={styles.heroFooter}>
                        <View style={styles.heroStat}>
                            <Typography style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)' }}>Avg / Appt</Typography>
                            <Typography weight="700" style={{ fontSize: 16, color: 'white' }}>₹850</Typography>
                        </View>
                        <View style={styles.heroStat}>
                            <Typography style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)' }}>New Invoices</Typography>
                            <Typography weight="700" style={{ fontSize: 16, color: 'white' }}>24</Typography>
                        </View>
                    </View>
                </Card>

                <View style={styles.statsGrid}>
                    {stats.map((s, i) => (
                        <Card key={i} style={[styles.miniStat, { flex: 1, backgroundColor: colors.panel, borderColor: colors.border }]}>
                            <Typography variant="caption" color={colors.text3}>{s.label}</Typography>
                            <Typography weight="700" style={{ fontSize: 18, color: colors.white, marginVertical: 4 }}>{s.value}</Typography>
                            <View style={styles.deltaRow}>
                                {s.up ? <ArrowUpRight size={12} color={colors.green} /> : <ArrowDownRight size={12} color={colors.red} />}
                                <Typography weight="600" style={{ fontSize: 10, color: s.up ? colors.green : colors.red }}>{s.delta}</Typography>
                            </View>
                        </Card>
                    ))}
                </View>

                <View style={styles.sectionHeader}>
                    <Typography weight="700" style={{ color: colors.white }}>Recent Invoices</Typography>
                    <TouchableOpacity><Typography weight="600" style={{ fontSize: 13, color: colors.blue }}>View All</Typography></TouchableOpacity>
                </View>

                <View style={styles.invoiceList}>
                    {[1, 2, 3, 4].map((_, i) => (
                        <TouchableOpacity key={i} style={[styles.invoiceItem, { backgroundColor: colors.panel, borderColor: colors.border }]}>
                            <View style={[styles.invoiceIcon, { backgroundColor: colors.panel2, borderColor: colors.border }]}>
                                <DollarSign size={20} color={colors.amber} />
                            </View>
                            <View style={{ flex: 1 }}>
                                <View style={styles.nameRow}>
                                    <Typography weight="700" style={{ fontSize: 15, color: colors.white }}>INV-2026-042</Typography>
                                    <Typography weight="700" style={{ fontSize: 15, color: colors.white }}>₹1,200</Typography>
                                </View>
                                <View style={styles.nameRow}>
                                    <Typography variant="caption" color={colors.text3}>Rohan Das · 20 Feb</Typography>
                                    <Typography weight="600" style={{ fontSize: 10, color: colors.green }}>PAID</Typography>
                                </View>
                            </View>
                            <ChevronRight size={18} color={colors.text3} />
                        </TouchableOpacity>
                    ))}
                </View>
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
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    heroCard: {
        padding: 24,
        borderRadius: 24,
        marginBottom: 20,
    },
    heroHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 20,
    },
    heroBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        backgroundColor: 'rgba(255,255,255,0.15)',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,
    },
    heroDivider: {
        height: 1,
        backgroundColor: 'rgba(255,255,255,0.15)',
        marginBottom: 20,
    },
    heroFooter: {
        flexDirection: 'row',
        gap: 40,
    },
    heroStat: {
        gap: 4,
    },
    statsGrid: {
        flexDirection: 'row',
        gap: 12,
        marginBottom: 30,
    },
    miniStat: {
        padding: 12,
    },
    deltaRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    invoiceList: {
        gap: 12,
    },
    invoiceItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 14,
        borderRadius: 16,
        borderWidth: 1,
        gap: 14,
    },
    invoiceIcon: {
        width: 44,
        height: 44,
        borderRadius: 12,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    nameRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});

export default RevenueScreen;
