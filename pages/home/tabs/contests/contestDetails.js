import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SecondaryHeader } from "../../components/secondaryHeader";
import { useEffect, useState } from "react";
import { APIService } from "../../../../utils/apiservice";
import { COLORS, FONTS } from "../../../../styles/styles";
import { ContestDetailTimer } from "./components/timer";
import { VideosScroll } from "../../components/videos";
import { VideoCardSecondary } from "../../components/video";
import { useNavigation } from "@react-navigation/native";
import { Loading } from "../../../../common/loading";

export const ContestDetails = ({ route }) => {

    const { id, title } = route.params;
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigator = useNavigation();

    async function getContestDetails() {
        setLoading(true);
        try {
            const response = await APIService.getContestDetails(id);
            if (response) setData(response);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getContestDetails();
    }, [id]);

    if(!id || !title) return <Text>Error</Text>;

    return (
        <View style={{ flex: 1}}>
            <SecondaryHeader {...{ title, showIcons: true }} />
            <ScrollView style={{ flex: 1 }}>
                <View style={{ flex : 1, marginHorizontal: 16, paddingVertical: 16 }}>
                    {loading ? (
                        <Loading />
                    ) : (
                        <View style={{ flex: 1, gap: 16 }}>
                            {/* Rest of the rendering logic */}
                        </View>
                    )}
                </View>
            </ScrollView>
        </View>
    )
}