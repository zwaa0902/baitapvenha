import Head from 'next/head';

import Layout from '../../components/Layout';
import Profile from '../../containers/Profile';

const ProfilePage = () => {
    return (
        <>
            <Head>
                <title>Profile</title>
            </Head>
            <Profile />
        </>
    );
};

ProfilePage.Layout = Layout;

export default ProfilePage;
