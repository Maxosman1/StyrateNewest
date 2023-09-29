import { FakeData } from "./fakedata";
import DummyProfile from "../assets/temp/profile-pic.jpg";

export class APIService {

    static getLeaderboards() {
        return FakeData.leaderboards;
    }

    static getNavigatorProfilePic() {
        return DummyProfile;
    }

    static getRewards() {
        return FakeData.rewards;
    }

    static getAllVideos() {
        return FakeData.videos;
    }

    static getVideos(type) {
        if (!type || type == 'all') return FakeData.videos;
        else return FakeData.videos.filter(video => video.type == type);
    }

    static getProfileData() {
        return FakeData.profile;
    }

    static getContestDetails(id) {
        const contestFromData = Constant.contests.categories.flatMap(category => category.contests).find(contest => contest.id === id);
        if (!contestFromData) {
            throw new Error("The selected id could not be found in the contest data.");
        }
        const description = contestFromData.description;
        return {
            description,
            price: 100,
            deadline: '2023-09-26',
            topVideos: FakeData.videos 
        }
    }
}