import * as React from 'react';
import { PageLayout } from '../../../shared/components/PageLayout/PageLayout';
import './styles.scss';
import Helmet from 'react-helmet';

export default class InstallationMap extends React.Component<{}, {}> {
    public render() {
        const installations_url =
            'https://gentle-badlands-39293.herokuapp.com/';
        return (
            <PageLayout
                className={'whiteBackground staticPage largeMap'}
                hideFooter={true}
            >
                <Helmet>
                    <title>
                        {'cBioPortal for Cancer Genomics::Installation Map'}
                    </title>
                </Helmet>
                <iframe
                    frameBorder="0"
                    scrolling="no"
                    src={installations_url}
                />
            </PageLayout>
        );
    }
}
