import React from 'react';
import { View, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useTheme } from '../../../theme/ThemeProvider';
import { Typography, Card } from '../../../components/Base';
import { Header } from '../../../components/Header';
import { Search, Filter, MoreVertical, Phone, Calendar } from 'lucide-react-native';

const PatientRow = ({ name, gender, age, lastVisit, id, type, status }: any) => {
    const { colors, isDark } = useTheme();
    const statusColor = status === 'Active' ? '#22c55e' : (status === 'Recovery' ? '#3b82f6' : (status === 'New' ? '#f59e0b' : '#94a3b8'));

    return (
        <Card style={[styles.patientCard, { backgroundColor: colors.panel, borderColor: colors.border }] as any}>
            <View style={styles.patientMain}>
                <View style={[styles.avatar, { backgroundColor: colors.panel2, borderColor: colors.border }]}>
                    <Typography weight="700" style={{ color: colors.blue }}>{name.split(' ').map((n: string) => n[0]).join('')}</Typography>
                </View>
                <View style={{ flex: 1 }}>
                    <View style={styles.nameRow}>
                        <Typography weight="700" style={{ fontSize: 16, color: colors.text }}>{name}</Typography>
                        <View style={[styles.typePill, { backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' }]}>
                            <Typography weight="600" style={{ fontSize: 9, color: colors.text3 }}>{type}</Typography>
                        </View>
                    </View>
                    <Typography variant="caption" color={colors.text2}>{gender} · {age} years · ID: {id}</Typography>
                </View>
            </View>
            <View style={[styles.patientFooter, { borderTopColor: colors.border }]}>
                <View style={styles.visitInfo}>
                    <Calendar size={14} color={colors.text3} />
                    <Typography variant="caption" color={colors.text3}>Last: {lastVisit}</Typography>
                </View>
                <View style={styles.patientActions}>
                    <View style={[styles.statusDot, { backgroundColor: statusColor }]} />
                    <Typography weight="600" style={{ fontSize: 11, color: colors.text2, marginRight: 8 }}>{status}</Typography>
                    <TouchableOpacity style={[styles.viewBtn, { backgroundColor: colors.panel2, borderColor: colors.border }]}>
                        <Typography weight="600" style={{ fontSize: 12, color: colors.text }}>Records</Typography>
                    </TouchableOpacity>
                </View>
            </View>
        </Card>
    );
};

const PatientsScreen = () => {
    const { colors } = useTheme();
    const patients = [
        { name: 'Arjun Mehta', gender: 'Male', age: '42', lastVisit: '10 Feb 2026', id: 'PT-8821', type: 'Chronic', status: 'Active' },
        { name: 'Sana Khan', gender: 'Female', age: '29', lastVisit: '15 Feb 2026', id: 'PT-9012', type: 'Post-Op', status: 'Recovery' },
        { name: 'Vikram Singh', gender: 'Male', age: '55', lastVisit: '18 Feb 2026', id: 'PT-7723', type: 'Regular', status: 'Stable' },
        { name: 'Priya Verma', gender: 'Female', age: '34', lastVisit: '19 Feb 2026', id: 'PT-6651', type: 'Consultation', status: 'New' },
    ];

    return (
        <View style={[styles.container, { backgroundColor: colors.navy }]}>
            <Header title="Patients" subtitle="1,284 patients total" />

            <View style={styles.searchBarContainer}>
                <View style={[styles.searchBar, { backgroundColor: colors.panel, borderColor: colors.border }]}>
                    <Search size={20} color={colors.text3} />
                    <TextInput
                        placeholder="Search patients by name, ID..."
                        placeholderTextColor={colors.text3}
                        style={[styles.searchInput, { color: colors.text }]}
                    />
                </View>
                <TouchableOpacity style={[styles.filterBtn, { borderColor: colors.border }]}><Filter size={20} color={colors.text2} /></TouchableOpacity>
            </View>

            <View style={styles.filterSection}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.filterScroll}
                    decelerationRate="fast"
                >
                    {['All', 'Chronic', 'Post-Op', 'Consultation', 'Regular'].map((f, i) => (
                        <TouchableOpacity key={i} style={[styles.filterChip, i === 0 ? { backgroundColor: colors.blue } : { backgroundColor: colors.panel, borderColor: colors.border, borderWidth: 1 }]}>
                            <Typography weight="600" style={{ fontSize: 13, color: i === 0 ? 'white' : colors.text2 }}>{f}</Typography>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>

            <ScrollView contentContainerStyle={styles.listContent} showsVerticalScrollIndicator={false}>
                {patients.map((p, i) => <PatientRow key={i} {...p} />)}
                <View style={{ height: 100 }} />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchBarContainer: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 15,
        gap: 12,
    },
    searchBar: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        height: 48,
        borderRadius: 12,
        borderWidth: 1,
        gap: 10,
    },
    searchInput: {
        flex: 1,
        fontSize: 14,
    },
    filterBtn: {
        width: 48,
        height: 48,
        borderRadius: 12,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    filterSection: {
        paddingBottom: 15,
    },
    filterScroll: {
        paddingHorizontal: 20,
        gap: 10,
    },
    filterChip: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 10,
    },
    listContent: {
        paddingHorizontal: 20,
        gap: 16,
    },
    patientCard: {
        padding: 0,
        borderRadius: 16,
    },
    patientMain: {
        flexDirection: 'row',
        padding: 16,
        gap: 16,
        alignItems: 'center',
    },
    avatar: {
        width: 52,
        height: 52,
        borderRadius: 14,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    nameRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    patientFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 12,
        paddingHorizontal: 16,
        borderTopWidth: 1,
    },
    visitInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    patientActions: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    actionBtn: {
        width: 32,
        height: 32,
        borderRadius: 8,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewBtn: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 8,
        borderWidth: 1,
    },
    typePill: {
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 6,
        marginLeft: 8,
    },
    statusDot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        marginRight: 6,
    },
});

export default PatientsScreen;
