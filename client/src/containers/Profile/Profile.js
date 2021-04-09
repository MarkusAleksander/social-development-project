import React from "react";

const Profile = () => (<div>Profile Page</div>);

export default Profile;

// import React, { Component } from "react";

// import Panel from "./../../components/UI/Panel/Panel";
// import UserDetails from "./../../components/Profile/UserDetails/UserDetails";
// import ConnectionsPanel from "./../../components/Profile/ConnectionsPanel/ConnectionsPanel";
// import GroupsPanel from "./../../components/Profile/GroupsPanel/GroupsPanel";
// import Posts from "./../../components/Posts/Posts";

// // * TEST DATA
// const test_avatar = "https://markholden.co.uk/7c10a1038d77d3a14ce91c34bc556a16.jpg";
// const connections = [
//     {
//         profile_id: 1,
//         avatar: test_avatar,
//     },
//     {
//         profile_id: 2,
//         avatar: test_avatar,
//     },
//     {
//         profile_id: 3,
//         avatar: test_avatar,
//     },
//     {
//         profile_id: 4,
//         avatar: test_avatar,
//     },
//     {
//         profile_id: 5,
//         avatar: test_avatar,
//     },
//     {
//         profile_id: 6,
//         avatar: test_avatar,
//     },
//     {
//         profile_id: 7,
//         avatar: test_avatar,
//     },
//     {
//         profile_id: 8,
//         avatar: test_avatar,
//     },
// ];
// const groups = [
//     {
//         group_id: 1,
//         avatar: test_avatar,
//     },
//     {
//         group_id: 2,
//         avatar: test_avatar,
//     },
//     {
//         group_id: 3,
//         avatar: test_avatar,
//     },
//     {
//         group_id: 4,
//         avatar: test_avatar,
//     },
//     {
//         group_id: 5,
//         avatar: test_avatar,
//     },
//     {
//         group_id: 6,
//         avatar: test_avatar,
//     },
//     {
//         group_id: 7,
//         avatar: test_avatar,
//     },
//     {
//         group_id: 8,
//         avatar: test_avatar,
//     },
// ];
// const posts = [
//     {
//         post_id: 1,
//         type: "text",
//         content: "This is a post"
//     },
//     {
//         post_id: 2,
//         type: "text",
//         content: "This is a post"
//     },
//     {
//         post_id: 3,
//         type: "text",
//         content: "This is a post"
//     },
//     {
//         post_id: 4,
//         type: "text",
//         content: "This is a post"
//     },
//     {
//         post_id: 5,
//         type: "text",
//         content: "This is a post"
//     },
//     {
//         post_id: 6,
//         type: "text",
//         content: "This is a post"
//     }
// ]

// class Profile extends Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             user_data: null
//         }
//     }

//     componentDidMount() {
//         // * on mounting, get user data
//     }

//     componentDidUpdate() {
//         // * on update
//     }

//     render() {
//         return (
//             <div className="sm:flex p-4 sm:space-x-4 space-y-4 sm:space-y-0">
//                 {/* Profile details */}
//                 <div className="sm:w-2/6 space-y-4">
//                     {/* profile */}
//                     <UserDetails />
//                     {/* connections list */}
//                     <ConnectionsPanel connections={connections} />
//                     {/* groups list */}
//                     <GroupsPanel groups={groups} />
//                 </div>
//                 {/* Profile posts */}
//                 <div className="sm:w-4/6 space-y-4">
//                     {/* * status update */}
//                     <Panel />
//                     {/* * previous posts */}
//                     <Posts posts={posts} />
//                 </div>
//             </div>
//         )
//     }

// }

// export default Profile;