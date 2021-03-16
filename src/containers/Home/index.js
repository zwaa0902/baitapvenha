import Link from 'next/link';

import { PROFILE_ROUTE } from '@/constants/routes';

import { Card, Description, GridCustom, Title, Wrapper } from './styles';

const Home = () => {
    return (
      
        <Wrapper>
            <Title>
                 HỆ THỐNG ĐĂNG KÝ XE Ô TÔ VÀ MÔ TÔ
            </Title>
            <GridCustom >
                <Card href="/user/table">
                    <h3>Đăng ký di chuyển &rarr;</h3>
                </Card>

                <Card href="/user/dichuyen">
                    <h3>Hồ sơ chuyển đến &rarr;</h3>
                </Card>

            </GridCustom>
        </Wrapper>
    );
};

export default Home;
