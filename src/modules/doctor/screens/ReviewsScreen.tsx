import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Theme } from '../../theme/theme';
import { useTheme } from '../../theme/ThemeProvider';
import { Typography, Card } from '../../components/Base';
import { Header } from '../../components/Header';
import { Star, MessageSquare, ThumbsUp, ChevronDown } from 'lucide-react-native';

const ReviewCard = ({ name, rating, date, comment }: any) => {
    const { colors } = useTheme();
    return (
        <Card style={[styles.reviewCard, { backgroundColor: colors.panel, borderColor: colors.border }] as any}>
            <View style={styles.reviewHeader}>
                <View style={[styles.avatar, { backgroundColor: colors.panel2, borderColor: colors.border }]}>
                    <Typography weight="700" style={{ color: colors.blue }}>{name[0]}</Typography>
                </View>
                <View style={{ flex: 1 }}>
                    <Typography weight="700" style={{ fontSize: 15, color: colors.white }}>{name}</Typography>
                    <Typography variant="caption" color={colors.text3}>{date}</Typography>
                </View>
                <View style={styles.ratingRow}>
                    <Star size={14} color={colors.amber} fill={colors.amber} />
                    <Typography weight="700" style={{ fontSize: 13, color: colors.white }}>{rating}</Typography>
                </View>
            </View>
            <Typography style={{ fontSize: 14, lineHeight: 20, color: colors.text, marginBottom: 16 }}>{comment}</Typography>
            <View style={[styles.reviewFooter, { borderTopColor: colors.border }]}>
                <TouchableOpacity style={styles.footerAction}>
                    <ThumbsUp size={16} color={colors.text2} />
                    <Typography variant="caption" color={colors.text2}>Helpful</Typography>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerAction}>
                    <MessageSquare size={16} color={colors.text2} />
                    <Typography variant="caption" color={colors.text2}>Reply</Typography>
                </TouchableOpacity>
            </View>
        </Card>
    );
};

const ReviewsScreen = () => {
    const { colors } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: colors.navy }]}>
            <Header title="Patient Reviews" />

            <View style={styles.summaryBar}>
                <View style={styles.summaryLeft}>
                    <Typography variant="h1" weight="700" color={colors.white}>4.9</Typography>
                    <View style={styles.stars}>
                        {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={16} color={colors.amber} fill={colors.amber} />)}
                    </View>
                    <Typography variant="caption" color={colors.text3}>Based on 124 reviews</Typography>
                </View>
                <View style={[styles.summaryDivider, { backgroundColor: colors.border }]} />
                <View style={styles.summaryRight}>
                    <Typography weight="600" color={colors.text2}>98% Recommendation</Typography>
                    <Typography variant="caption" color={colors.text3}>Top 5% in Mumbai</Typography>
                </View>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <ReviewCard
                    name="Rajesh Khanna"
                    rating="5.0"
                    date="2 days ago"
                    comment="Dr. Iyer is extremely professional and patient. He explained the procedure in detail and made me feel very comfortable."
                />
                <ReviewCard
                    name="Anita Desai"
                    rating="4.8"
                    date="1 week ago"
                    comment="Great experience. The clinic is very clean and the staff is helpful. Dr. Iyer is highly recommended for orthopedic issues."
                />
                <View style={{ height: 100 }} />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    summaryBar: {
        flexDirection: 'row',
        padding: 24,
        alignItems: 'center',
        gap: 24,
    },
    summaryLeft: {
        alignItems: 'center',
        gap: 4,
    },
    stars: {
        flexDirection: 'row',
        gap: 2,
    },
    summaryDivider: {
        width: 1,
        height: 60,
    },
    summaryRight: {
        flex: 1,
        gap: 4,
    },
    scrollContent: {
        paddingHorizontal: 20,
        gap: 16,
    },
    reviewCard: {
        padding: 16,
    },
    reviewHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        marginBottom: 16,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 12,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ratingRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        backgroundColor: 'rgba(245,158,11,0.1)',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
    },
    reviewFooter: {
        flexDirection: 'row',
        gap: 24,
        paddingTop: 12,
        borderTopWidth: 1,
    },
    footerAction: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
});

export default ReviewsScreen;
