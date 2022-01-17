import {Fragment} from "react";

function RouteTabs() {
    return (
        <Fragment>
            <uni-router shadow={true}/>
            <uni-router-link activate={true} params={'custom=1'}/>

            <uni-tabs>
                <uni-tab-bar mini={true}>
                    <uni-router-link params={'custom=1'}>
                        <uni-route params={'custom=1'} prop={'active'}>
                            <uni-tab
                                value={'Tab 1'}
                                icon={'favorite'}
                                icon-type={'two-tone'}
                                angle={270}
                            />
                        </uni-route>
                    </uni-router-link>

                    <uni-router-link params={'custom=2'}>
                        <uni-route params={'custom=2'} prop={'active'}>
                            <uni-tab only={true}>
                                <uni-tab-content>
                                    <uni-tab-icon
                                        icons={'fa'}
                                        type={'brands'}
                                        name={'font-awesome'}
                                    />

                                    <uni-tab-text-label value={'Tab 2'}/>

                                    <uni-route params={'custom=2'} prop={'active'}>
                                        <uni-tab-indicator/>
                                    </uni-route>
                                </uni-tab-content>

                                <uni-tab-ripple/>
                            </uni-tab>
                        </uni-route>
                    </uni-router-link>
                </uni-tab-bar>

                <uni-route-display params={'custom=1'} hidden={true}>
                    Tab 1 Content
                </uni-route-display>

                <uni-route-display params={'custom=2'} hidden={true}>
                    Tab 2 Content
                </uni-route-display>
            </uni-tabs>
        </Fragment>
    );
}

export default RouteTabs;
