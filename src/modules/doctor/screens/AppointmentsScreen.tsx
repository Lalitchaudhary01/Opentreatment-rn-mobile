import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useTheme } from '../../../theme/ThemeProvider';
import { Typography, Card } from '../../../components/Base';
import { Header } from '../../../components/Header';
import { ChevronLeft, ChevronRight, Filter, Clock } from 'lucide-react-native';

const AppointmentsScreen = () => {
    const { colors } = useTheme();
    const days = [
        { day: 'Mon', date: '16', active: false },
        { day: 'Tue', date: '17', active: false },
        { day: 'Wed', date: '18', active: false },
        { day: 'Thu', date: '19', active: false },
        { day: 'Fri', date: '20', active: true },
        { day: 'Sat', date: '21', active: false },
        { day: 'Sun', date: '22', active: false },
    ];

    const appointments = [
        { time: '11:30 AM', patient: 'Ravi Pillai', type: 'Consultation · OPD', status: 'In Progress', statusColor: 'inprog', avatar: 'RP', grad: ['#3b82f6', '#1d4ed8'] },
        { time: '12:00 PM', patient: 'Meena Joshi', type: 'Follow-up · In-clinic', status: 'Confirmed', statusColor: 'confirmed', avatar: 'MJ', grad: ['#14b8a6', '#0d9488'] },
        { time: '02:00 PM', patient: 'Sanjay Bhat', type: 'Consultation · Video', status: 'Waiting', statusColor: 'waiting', avatar: 'SB', grad: ['#f59e0b', '#d97706'] },
    ];

    return (
        <View style={[styles.container, { backgroundColor: colors.navy }]}>
            <Header title="Appointments" />

            <View style={[styles.calendarStrip, { borderBottomColor: colors.border }]}>
                <View style={styles.stripHeader}>
                    <Typography weight="600" style={{ color: colors.text }}>February 2026</Typography>
                    <View style={styles.stripNav}>
                        <TouchableOpacity style={[styles.navBtn, { borderColor: colors.border }]}><ChevronLeft size={18} color={colors.text2} /></TouchableOpacity>
                        <TouchableOpacity style={[styles.navBtn, { borderColor: colors.border }]}><ChevronRight size={18} color={colors.text2} /></TouchableOpacity>
                    </View>
                </View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.daysScroll}
                    decelerationRate="fast"
                >
                    {days.map((d, i) => (
                        <TouchableOpacity key={i} style={[styles.dayItem, d.active && { backgroundColor: colors.blue }]}>
                            <Typography weight="500" style={{ fontSize: 11, color: d.active ? 'white' : colors.text3 }}>{d.day}</Typography>
                            <Typography weight="700" style={{ fontSize: 16, color: d.active ? 'white' : colors.text }}>{d.date}</Typography>
                            {d.active && <View style={styles.activeDot} />}
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>

            <View style={styles.filterSection}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.filterScroll}
                    style={{ flex: 1 }}
                    decelerationRate="fast"
                >
                    <TouchableOpacity style={[styles.filterChip, { backgroundColor: colors.blue }]}>
                        <Typography weight="600" style={{ fontSize: 13, color: 'white' }}>All</Typography>
                    </TouchableOpacity>
                    {['Confirmed', 'In Progress', 'Waiting', 'Done'].map((f, i) => (
                        <TouchableOpacity key={i} style={[styles.filterChip, { backgroundColor: colors.panel, borderColor: colors.border, borderWidth: 1 }]}>
                            <Typography weight="500" style={{ fontSize: 13, color: colors.text2 }}>{f}</Typography>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                <TouchableOpacity style={[styles.filterBtn, { borderColor: colors.border }]}><Filter size={18} color={colors.text2} /></TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.timelineScroll} showsVerticalScrollIndicator={false}>
                {appointments.map((apt, i) => (
                    <Card key={i} style={[styles.aptCard, { backgroundColor: colors.panel, borderColor: colors.border }] as any}>
                        <View style={styles.aptHeader}>
                            <View style={[styles.apptAv, { backgroundColor: apt.grad[0] }]}>
                                <Typography weight="700" style={{ fontSize: 12, color: 'white' }}>{apt.avatar}</Typography>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Typography weight="700" style={{ fontSize: 15, color: colors.text }}>{apt.patient}</Typography>
                                <Typography variant="caption" color={colors.text3}>{apt.type}</Typography>
                            </View>
                            <View style={{ alignItems: 'flex-end' }}>
                                <Typography weight="600" style={{ fontSize: 13, color: colors.text }}>{apt.time}</Typography>
                                <View style={[styles.pill, (styles as any)[apt.statusColor]]}>
                                    <Typography weight="600" style={{ fontSize: 10, color: apt.statusColor === 'inprog' ? '#60a5fa' : (apt.statusColor === 'confirmed' ? '#4ade80' : '#fbbf24') }}>{apt.status}</Typography>
                                </View>
                            </View>
                        </View>

                        <View style={[styles.aptActions, { borderTopColor: colors.border }]}>
                            <TouchableOpacity style={[styles.btnSecondary, { borderColor: colors.border }]}>
                                <Typography weight="600" style={{ fontSize: 13, color: colors.text }}>Reschedule</Typography>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.btnPrimary, { backgroundColor: colors.blue }]}>
                                <Typography weight="600" style={{ fontSize: 13, color: 'white' }}>Join Consultation</Typography>
                            </TouchableOpacity>
                        </View>
                    </Card>
                ))}
                <View style={{ height: 100 }} />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    calendarStrip: {
        paddingVertical: 15,
        borderBottomWidth: 1,
    },
    stripHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 15,
    },
    stripNav: {
        flexDirection: 'row',
        gap: 8,
    },
    navBtn: {
        width: 32,
        height: 32,
        borderRadius: 8,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    daysScroll: {
        paddingHorizontal: 16,
        gap: 10,
    },
    dayItem: {
        width: 50,
        height: 70,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
    },
    activeDot: {
        width: 4,
        height: 4,
        borderRadius: 2,
        backgroundColor: 'white',
        marginTop: 4,
    },
    filterSection: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 15,
        gap: 12,
    },
    filterScroll: {
        gap: 8,
    },
    filterChip: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 10,
    },
    filterBtn: {
        width: 40,
        height: 40,
        borderRadius: 10,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    timelineScroll: {
        paddingHorizontal: 20,
        gap: 16,
    },
    aptCard: {
        padding: 16,
        borderRadius: 16,
        borderWidth: 1,
    },
    aptHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        marginBottom: 16,
    },
    apptAv: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    pill: {
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 10,
        marginTop: 4,
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
    aptActions: {
        flexDirection: 'row',
        gap: 10,
        paddingTop: 16,
        borderTopWidth: 1,
    },
    btnPrimary: {
        flex: 1.5,
        height: 38,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnSecondary: {
        flex: 1,
        height: 38,
        borderRadius: 10,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default AppointmentsScreen;
