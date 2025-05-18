import React from 'react';
import { LandingPage } from 'src/components/LandingPage';
import { MainLayout } from '../layouts/MainLayout';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'src/store';
import { removeBottle, removeBuster } from 'src/store/machineSlice';
import { Button, Divider } from 'antd';

const _HomePage = () => {
    const { bottles, busters } = useSelector((state: RootState) => state.machine);
    const dispatch = useDispatch();

    const renderBottles = () =>
        bottles.map((bottle) => (
            <div style={{ display: 'flex' }} key={bottle}>
                {bottle}
                <Button onClick={() => dispatch(removeBottle(bottle))}>Remove</Button>
            </div>
        ));

    const renderBusters = () =>
        busters.map((buster) => (
            <div style={{ display: 'flex' }} key={buster}>
                {buster}
                <Button onClick={() => dispatch(removeBuster(buster))}>Remove</Button>
            </div>
        ));

    return (
        <>
            <MainLayout title={'Home'}>
                <LandingPage />
                <Divider />
                <h3>Redux</h3>
                <div style={{ display: 'flex' }}>
                    {renderBottles()}
                    {renderBusters()}
                </div>
            </MainLayout>
        </>
    );
};

const HomePage = React.memo(_HomePage);
export default HomePage;
