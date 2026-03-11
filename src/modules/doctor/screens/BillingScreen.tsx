import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Theme } from '../../theme/theme';
import { useTheme } from '../../theme/ThemeProvider';
import { Typography, Card } from '../../components/Base';
import { Header } from '../../components/Header';
import { CreditCard, DollarSign, Download, Clock, ChevronRight, TrendingUp, Share2 } from 'lucide-react-native';

const BillingScreen = () => {
    const { colors } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: colors.navy }]}>
            <Header title="Billing & Plans" />

            <View style={styles.statsRow}>
                <View style={[styles.statBox, { backgroundColor: colors.panel, borderColor: colors.border }]}>
                    <View style={[styles.statIcon, { backgroundColor: 'rgba(59,130,246,0.1)' }]}>
                        <TrendingUp size={20} color={colors.blue} />
                    </View>
                    <Typography variant="caption" color={colors.text3}>Life-time Collection</Typography>
                    <Typography weight="700" style={{ fontSize: 22, color: colors.text, marginTop: 4 }}>₹24.8L</Typography>
                </View>
                <View style={[styles.statBox, { backgroundColor: colors.panel, borderColor: colors.border }]}>
                    <View style={[styles.statIcon, { backgroundColor: 'rgba(20,184,166,0.1)' }]}>
                        <Clock size={20} color={colors.teal} />
                    </View>
                    <Typography variant="caption" color={colors.text3}>Pending Amount</Typography>
                    <Typography weight="700" style={{ fontSize: 22, color: colors.text, marginTop: 4 }}>₹1.2L</Typography>
                </View>
            </View>

            <View style={styles.filterSection}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.filterScroll}
                    decelerationRate="fast"
                >
                    {['All Invoices', 'Paid', 'Pending', 'Overdue'].map((f, i) => (
                        <TouchableOpacity key={i} style={[styles.filterChip, i === 0 ? { backgroundColor: colors.blue } : { backgroundColor: colors.panel, borderColor: colors.border, borderWidth: 1 }]}>
                            <Typography weight="600" style={{ fontSize: 13, color: i === 0 ? 'white' : colors.text2 }}>{f}</Typography>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

                {[
                    { patient: 'Arjun Mehta', date: '20 Feb 2026', amount: '₹1,500', status: 'Paid', statusColor: 'confirmed' },
                    { patient: 'Sana Khan', date: '18 Feb 2026', amount: '₹2,200', status: 'Pending', statusColor: 'waiting' },
                    { patient: 'Vikram Singh', date: '15 Feb 2026', amount: '₹1,200', status: 'Overdue', statusColor: 'overdue' },
                ].map((item, i) => (
                    <Card key={i} style={[styles.billingCard, { backgroundColor: colors.panel, borderColor: colors.border }] as any}>
                        <View style={styles.billHeader}>
                            <View style={{ flex: 1 }}>
                                <Typography weight="700" style={{ fontSize: 15, color: colors.text }}>{item.patient}</Typography>
                                <Typography variant="caption" color={colors.text3}>Invoice #{1082 + i} · {item.date}</Typography>
                            </View>
                            <View style={{ alignItems: 'flex-end' }}>
                                <Typography weight="700" style={{ fontSize: 16, color: colors.text }}>{item.amount}</Typography>
                                <View style={[styles.pill, (styles as any)[item.statusColor]]}>
                                    <Typography weight="600" style={{ fontSize: 9.5, color: item.statusColor === 'confirmed' ? '#4ade80' : (item.statusColor === 'waiting' ? '#fbbf24' : '#f87171') }}>{item.status}</Typography>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.billActions, { borderTopColor: colors.border }]}>
                            <TouchableOpacity style={[styles.billBtn, { borderColor: colors.border }]}><Share2 size={16} color={colors.text2} /><Typography weight="600" style={{ fontSize: 12, color: colors.text2 }}>Send</Typography></TouchableOpacity>
                            <TouchableOpacity style={[styles.billBtn, { borderColor: colors.border }]}><Download size={16} color={colors.text2} /><Typography weight="600" style={{ fontSize: 12, color: colors.text2 }}>PDF</Typography></TouchableOpacity>
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
    statsRow: {
        flexDirection: 'row',
        padding: 20,
        gap: 12,
    },
    statBox: {
        flex: 1,
        padding: 16,
        borderRadius: 16,
        borderWidth: 1,
    },
    statIcon: {
        width: 36,
        height: 36,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12,
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
    scrollContent: {
        paddingHorizontal: 20,
        gap: 16,
    },
    billingCard: {
        padding: 16,
        borderRadius: 16,
    },
    billHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    pill: {
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 10,
        marginTop: 4,
    },
    confirmed: {
        backgroundColor: 'rgba(34,197,94,0.12)',
    },
    waiting: {
        backgroundColor: 'rgba(245,158,11,0.12)',
    },
    overdue: {
        backgroundColor: 'rgba(239,68,68,0.12)',
    },
    billActions: {
        flexDirection: 'row',
        gap: 12,
        paddingTop: 16,
        borderTopWidth: 1,
    },
    billBtn: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        height: 38,
        borderRadius: 10,
        borderWidth: 1,
    },
});

export default BillingScreen;
