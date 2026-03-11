import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Theme } from '../../theme/theme';
import { useTheme } from '../../theme/ThemeProvider';
import { Typography, Card } from '../../components/Base';
import { Header } from '../../components/Header';
import { Users, Calendar, TrendingUp, CreditCard, ChevronRight, Plus } from 'lucide-react-native';

const StatCard = ({ title, value, delta, icon: Icon, color }: any) => {
    const { colors } = useTheme();
    return (
        <View style={[styles.statCard, { backgroundColor: colors.panel, borderColor: colors.border }]}>
            <View style={[styles.statIcon, { backgroundColor: `${color}15` }]}>
                <Icon size={14} color={color} />
            </View>
            <Typography weight="700" style={[styles.statValue, { color: colors.text }]}>{value}</Typography>
            <Typography variant="caption" color={colors.text2} style={{ fontSize: 10 }}>{title}</Typography>
            <View style={[styles.deltaTag, { backgroundColor: delta.includes('↑') ? 'rgba(34,197,94,0.12)' : 'rgba(239,68,68,0.12)' }]}>
                <Typography weight="600" style={{ fontSize: 9.5, color: delta.includes('↑') ? colors.green : colors.red }}>{delta}</Typography>
            </View>
        </View>
    );
};

const QuickAction = ({ icon: Icon, label, color }: any) => {
    const { colors } = useTheme();
    return (
        <TouchableOpacity style={styles.actionItem}>
            <View style={[styles.actionIcon, { backgroundColor: colors.panel, borderColor: colors.border }]}>
                <Icon size={20} color={color} />
            </View>
            <Typography weight="500" style={[styles.actionLabel, { color: colors.text }]}>{label}</Typography>
        </TouchableOpacity>
    );
};

const DashboardScreen = () => {
    const { colors, mode } = useTheme();
    const chartData = [
        { day: 'M', height: 40, active: false },
        { day: 'T', height: 75, active: false },
        { day: 'W', height: 60, active: false },
        { day: 'T', height: 90, active: false },
        { day: 'F', height: 72, active: true },
        { day: 'S', height: 20, active: false },
        { day: 'S', height: 10, active: false },
    ];

    return (
        <View style={[styles.container, { backgroundColor: colors.navy }]}>
            <Header
                title="Good morning, Dr. Iyer 👋"
                subtitle="Friday, 20 Feb 2026 · 12 appts today"
            />

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.statScroll}
                    decelerationRate="fast"
                    snapToInterval={Dimensions.get('window').width * 0.42 + 10}
                >
                    <StatCard title="Today's Appointments" value="12" delta="↑ +4" icon={Calendar} color={colors.blue} />
                    <StatCard title="Total Patients" value="1,284" delta="↑ +28" icon={Users} color={colors.teal} />
                    <StatCard title="Revenue This Month" value="₹92.1k" delta="↑ +12%" icon={TrendingUp} color={colors.amber} />
                    <StatCard title="Pending Invoices" value="3" delta="↓ 3 due" icon={CreditCard} color={colors.green} />
                </ScrollView>

                <View style={styles.sectionHeader}>
                    <Typography weight="600" style={{ color: colors.text }}>Quick Actions</Typography>
                </View>

                <View style={styles.actionsGrid}>
                    <QuickAction icon={Plus} label="New Appt" color={colors.blue} />
                    <QuickAction icon={Users} label="Add Patient" color={colors.teal} />
                    <QuickAction icon={CreditCard} label="New Invoice" color={colors.amber} />
                    <QuickAction icon={TrendingUp} label="Analytics" color={colors.green} />
                </View>

                <View style={styles.analyticsRow}>
                    <Card style={[styles.chartCard, { flex: 1.1, backgroundColor: colors.panel, borderColor: colors.border }] as any}>
                        <View style={styles.cardHeader}>
                            <View>
                                <Typography weight="600" style={{ color: colors.text, fontSize: 12.5 }}>This Week</Typography>
                                <Typography variant="caption" color={colors.text3} style={{ fontSize: 11 }}>Appointments Mon–Sun</Typography>
                            </View>
                            <Typography weight="700" style={{ color: colors.green, fontSize: 12.5 }}>+4%</Typography>
                        </View>
                        <View style={styles.chartArea}>
                            {chartData.map((d, i) => (
                                <View key={i} style={styles.barWrapper}>
                                    <View style={[styles.bar, {
                                        height: `${d.height}%` as any,
                                        backgroundColor: d.active ? colors.blue : (mode === 'light' ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.08)')
                                    }]} />
                                    <Typography variant="caption" style={{ fontSize: 9, color: d.active ? colors.blue : colors.text3, fontWeight: '500' }}>{d.day}</Typography>
                                </View>
                            ))}
                        </View>
                    </Card>

                    <Card style={[styles.scheduleCard, { flex: 1, backgroundColor: colors.panel, borderColor: colors.border }] as any}>
                        <View style={styles.cardHeader}>
                            <Typography weight="600" style={{ color: colors.text }}>Upcoming</Typography>
                            <TouchableOpacity><Typography variant="caption" color={colors.blue}>See all</Typography></TouchableOpacity>
                        </View>
                        <View style={styles.scheduleList}>
                            {[
                                { name: 'Ravi Pillai', time: '11:30', status: 'In Progress', statusColor: 'inprog', avatar: 'RP', grad: ['#3b82f6', '#1d4ed8'] },
                                { name: 'Meena Joshi', time: '12:00', status: 'Confirmed', statusColor: 'confirmed', avatar: 'MJ', grad: ['#14b8a6', '#0d9488'] },
                                { name: 'Sanjay Bhat', time: '2:00', status: 'Waiting', statusColor: 'waiting', avatar: 'SB', grad: ['#f59e0b', '#d97706'] }
                            ].map((item, i) => (
                                <View key={i} style={[styles.scheduleItem, i === 2 && { borderBottomWidth: 0 }, { borderBottomColor: colors.border }]}>
                                    <View style={[styles.apptAv, { backgroundColor: item.grad[0] }]}>
                                        <Typography weight="700" style={{ fontSize: 11, color: 'white' }}>{item.avatar}</Typography>
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <Typography weight="600" style={{ fontSize: 13, color: colors.text }}>{item.name}</Typography>
                                        <Typography variant="caption" color={colors.text3}>Consultation · OPD</Typography>
                                    </View>
                                    <View style={{ alignItems: 'flex-end' }}>
                                        <Typography weight="600" style={{ fontSize: 12, color: colors.text }}>{item.time}</Typography>
                                        <View style={[styles.pill, (styles as any)[item.statusColor]]}>
                                            <Typography weight="600" style={{ fontSize: 9.5, color: item.statusColor === 'inprog' ? '#60a5fa' : (item.statusColor === 'confirmed' ? '#4ade80' : '#fbbf24') }}>{item.status}</Typography>
                                        </View>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </Card>
                </View>

                <View style={{ height: 40 }} />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContent: {
        paddingTop: 10,
    },
    statScroll: {
        paddingHorizontal: 20,
        gap: 10,
        marginBottom: 20,
        paddingBottom: 5, // For shadow if any
    },
    statCard: {
        borderWidth: 1,
        borderRadius: 14,
        padding: 14,
        width: Dimensions.get('window').width * 0.42,
    },
    statIcon: {
        width: 28,
        height: 28,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    deltaTag: {
        alignSelf: 'flex-start',
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 10,
        marginTop: 6,
    },
    statValue: {
        fontSize: 20,
        marginBottom: 2,
        letterSpacing: -0.5,
    },
    sectionHeader: {
        paddingHorizontal: 20,
        marginBottom: 12,
    },
    actionsGrid: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        gap: 10,
        marginBottom: 24,
    },
    actionItem: {
        flex: 1,
        alignItems: 'center',
        gap: 8,
    },
    actionIcon: {
        width: 52,
        height: 52,
        borderRadius: 16,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    actionLabel: {
        fontSize: 11,
    },
    analyticsRow: {
        paddingHorizontal: 16,
        gap: 16,
    },
    chartCard: {
        padding: 16,
        height: 200,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 20,
    },
    chartArea: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        height: 70,
        paddingHorizontal: 0,
    },
    barWrapper: {
        alignItems: 'center',
        gap: 6,
        flex: 1,
        height: '100%',
        paddingHorizontal: 2,
    },
    bar: {
        width: 14,
        borderRadius: 6,
    },
    scheduleCard: {
        padding: 16,
    },
    scheduleList: {
        gap: 0,
    },
    scheduleItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        paddingVertical: 12,
        borderBottomWidth: 1,
    },
    apptAv: {
        width: 36,
        height: 36,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
    },
    pill: {
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 10,
        marginTop: 3,
    },
    inprog: {
        backgroundColor: 'rgba(59,130,246,0.12)',
    },
    confirmed: {
        backgroundColor: 'rgba(34,197,94,0.12)',
    },
    waiting: {
        backgroundColor: 'rgba(245,158,11,0.12)',
    },
});

export default DashboardScreen;
