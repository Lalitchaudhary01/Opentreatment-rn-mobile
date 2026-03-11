import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { useTheme } from '../../../theme/ThemeProvider';
import { Typography, Card } from '../../../components/Base';
import { Header } from '../../../components/Header';
import { Clock, Plus, Trash2, Calendar, AlertCircle } from 'lucide-react-native';

const DayToggle = ({ day, active }: any) => {
    const { colors } = useTheme();
    return (
        <View style={[styles.dayRow, { borderBottomColor: colors.border }]}>
            <View style={styles.dayInfo}>
                <Typography weight="600" style={{ fontSize: 15, color: colors.white }}>{day}</Typography>
                <Typography variant="caption" color={active ? colors.green : colors.text3}>{active ? 'Working' : 'Off Day'}</Typography>
            </View>
            <Switch
                value={active}
                trackColor={{ false: colors.border2, true: colors.green }}
                thumbColor="white"
            />
        </View>
    );
};

const AvailabilityScreen = () => {
    const { colors } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: colors.navy }]}>
            <Header title="Availability" subtitle="Manage your clinic hours" />

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <View style={[styles.alertBox, { backgroundColor: 'rgba(59,130,246,0.1)', borderColor: 'rgba(59,130,246,0.2)' }]}>
                    <AlertCircle size={20} color={colors.blue} />
                    <View style={{ flex: 1 }}>
                        <Typography weight="600" style={{ fontSize: 13, color: colors.white }}>Holiday Notice</Typography>
                        <Typography variant="caption" color={colors.text2}>Your clinic is marked closed for Holi (March 14).</Typography>
                    </View>
                </View>

                <View style={styles.sectionHeader}>
                    <Typography weight="700" style={{ color: colors.white }}>Working Days</Typography>
                </View>

                <Card style={[styles.daysCard, { backgroundColor: colors.panel, borderColor: colors.border }] as any}>
                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day, i) => (
                        <DayToggle key={day} day={day} active={true} />
                    ))}
                    {['Saturday', 'Sunday'].map((day, i) => (
                        <DayToggle key={day} day={day} active={false} />
                    ))}
                </Card>

                <View style={styles.sectionHeader}>
                    <Typography weight="700" style={{ color: colors.white }}>Shift Management</Typography>
                    <TouchableOpacity style={styles.addBtn}><Plus size={18} color={colors.blue} /><Typography weight="600" style={{ fontSize: 13, color: colors.blue }}>Add Shift</Typography></TouchableOpacity>
                </View>

                <Card style={[styles.shiftCard, { backgroundColor: colors.panel, borderColor: colors.border }] as any}>
                    <View style={styles.shiftHeader}>
                        <View style={styles.shiftTitle}>
                            <Clock size={16} color={colors.text2} />
                            <Typography weight="600" style={{ color: colors.white }}>Morning Shift</Typography>
                        </View>
                        <TouchableOpacity><Trash2 size={16} color={colors.red} /></TouchableOpacity>
                    </View>
                    <View style={styles.timeInputs}>
                        <View style={[styles.timePicker, { backgroundColor: colors.panel2, borderColor: colors.border }]}>
                            <Typography variant="caption" color={colors.text3}>Start</Typography>
                            <Typography weight="600" style={{ color: colors.white }}>09:00 AM</Typography>
                        </View>
                        <View style={[styles.timeSeparator, { backgroundColor: colors.border }]} />
                        <View style={[styles.timePicker, { backgroundColor: colors.panel2, borderColor: colors.border }]}>
                            <Typography variant="caption" color={colors.text3}>End</Typography>
                            <Typography weight="600" style={{ color: colors.white }}>01:30 PM</Typography>
                        </View>
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
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    alertBox: {
        flexDirection: 'row',
        padding: 16,
        borderRadius: 16,
        borderWidth: 1,
        gap: 12,
        marginBottom: 24,
        alignItems: 'center',
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    daysCard: {
        padding: 0,
        marginBottom: 30,
    },
    dayRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
    },
    dayInfo: {
        gap: 2,
    },
    addBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    shiftCard: {
        padding: 16,
        marginBottom: 16,
    },
    shiftHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    shiftTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    timeInputs: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    timePicker: {
        flex: 1,
        padding: 12,
        borderRadius: 12,
        borderWidth: 1,
        gap: 4,
    },
    timeSeparator: {
        width: 12,
        height: 2,
    },
});

export default AvailabilityScreen;
