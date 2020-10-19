import * as React from 'react';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import i18next from 'i18next';

export const LOCAL_STORAGE_LANGUAGE = 'language';

export default class ChangeLanguage extends React.Component<{}> {
    private changeLanguage(lang: string): any {
        i18next.changeLanguage(lang);
        localStorage.setItem(LOCAL_STORAGE_LANGUAGE, lang);
        location.reload();
    }

    private items() {
        return [
            {
                id: '1',
                label: 'English',
                value: 'en',
            },

            {
                id: '2',
                label: 'Chinese',
                value: 'zh',
            },

            {
                id: '3',
                label: 'Japanese',
                value: 'ja',
            },
        ];
    }

    private getMenuItem() {
        const language = localStorage.getItem(LOCAL_STORAGE_LANGUAGE);

        return this.items().map(item => {
            return (
                <MenuItem
                    eventKey={item.id}
                    onClick={() => this.changeLanguage(item.value)}
                    active={language === item.value}
                >
                    {item.label}
                </MenuItem>
            );
        });
    }

    render() {
        return (
            <DropdownButton
                id="dropdown-basic-button"
                className="languageDropdownButton"
                title="Language"
                pullRight
            >
                {this.getMenuItem()}
            </DropdownButton>
        );
    }
}
