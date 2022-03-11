import React from 'react';
import { BUSINESS_TRANSACTIONS, BUSINESS_TRANSACTIONS_CONTENT, BY_EMAIL, CHANGES_TO_PRIVACY_POLICY, CHANGES_TO_PRIVACY_POLICY_CONTENT_1, CHANGES_TO_PRIVACY_POLICY_CONTENT_2, CHANGES_TO_PRIVACY_POLICY_CONTENT_3, CHILDRENS_POLICY, CHILDRENS_POLICY_CONTENT_1, CHILDRENS_POLICY_CONTENT_2, COLLECTING_USING_DATA, COLLECTING_USING_DATA_CONTENT, COLLECTING_USING_DATA_LIST_1, COLLECTING_USING_DATA_LIST_2, COLLECTING_USING_DATA_LIST_3, COLLECTING_USING_DATA_LIST_4, COLLECTING_USING_DATA_LIST_5, CONTACT_US, CONTACT_US_CONTENT, DEFINITIONS, DEFINITIONS_CONTENT, DEFINITIONS_LIST_1, DEFINITIONS_LIST_10, DEFINITIONS_LIST_11, DEFINITIONS_LIST_12, DEFINITIONS_LIST_2, DEFINITIONS_LIST_3, DEFINITIONS_LIST_4, DEFINITIONS_LIST_5, DEFINITIONS_LIST_6, DEFINITIONS_LIST_7, DEFINITIONS_LIST_8, DEFINITIONS_LIST_9, DISCLOSURE_PERSONAL_DATA, INTERPRETATION, INTERPRETATION_CONTENT, LAST_UPDATED, LAW_ENFORCEMENT, LAW_ENFORCEMENT_CONTENT, LINKS_TO_OTHER_WEBSITE, LINKS_TO_OTHER_WEBSITE_CONTENT_1, LINKS_TO_OTHER_WEBSITE_CONTENT_2, OTHER_LEGAL_REQUIREMENT, OTHER_LEGAL_REQUIREMENT_CONTENT, OTHER_LEGAL_REQUIREMENT_LIST_1, OTHER_LEGAL_REQUIREMENT_LIST_2, OTHER_LEGAL_REQUIREMENT_LIST_3, OTHER_LEGAL_REQUIREMENT_LIST_4, OTHER_LEGAL_REQUIREMENT_LIST_5, PERSONAL_DATA, PRIVACY_POLICY, PRIVACY_POLICY_CONTENT_1, PRIVACY_POLICY_CONTENT_2, RETENTION_PERSONAL_DATA, RETENTION_PERSONAL_DATA_CONTENT_1, RETENTION_PERSONAL_DATA_CONTENT_2, SECURITY_PERSONAL_DATA, SECURITY_PERSONAL_DATA_CONTENT, TTG_EMAIL, TRACKING_TECH_AND_COOKIES, TRACKING_TECH_AND_COOKIES_CONTENT_1, TRACKING_TECH_AND_COOKIES_CONTENT_2, TRACKING_TECH_AND_COOKIES_CONTENT_3, TRACKING_TECH_AND_COOKIES_CONTENT_4, TRACKING_TECH_AND_COOKIES_LIST_1, TRACKING_TECH_AND_COOKIES_LIST_2, TRACKING_TECH_AND_COOKIES_LIST_3, TRACKING_TECH_AND_COOKIES_LIST_4, TRACKING_TECH_AND_COOKIES_LIST_4A, TRACKING_TECH_AND_COOKIES_LIST_4B, TRACKING_TECH_AND_COOKIES_LIST_4C, TRACKING_TECH_AND_COOKIES_LIST_5, TRACKING_TECH_AND_COOKIES_LIST_5A, TRACKING_TECH_AND_COOKIES_LIST_5B, TRACKING_TECH_AND_COOKIES_LIST_5C, TRACKING_TECH_AND_COOKIES_LIST_6, TRACKING_TECH_AND_COOKIES_LIST_6A, TRACKING_TECH_AND_COOKIES_LIST_6B, TRACKING_TECH_AND_COOKIES_LIST_6C, TRANSFER_PERSONAL_DATA, TRANSFER_PERSONAL_DATA_CONTENT_1, TRANSFER_PERSONAL_DATA_CONTENT_2, TRANSFER_PERSONAL_DATA_CONTENT_3, TYPES_OF_DATA_COLLECTED, USAGE_DATA, USAGE_DATA_CONTENT_1, USAGE_DATA_CONTENT_2, USAGE_DATA_CONTENT_3, USAGE_DATA_CONTENT_4, USE_OF_YOUR_DATA, USE_OF_YOUR_DATA_CONTENT_1, USE_OF_YOUR_DATA_CONTENT_2, USE_OF_YOUR_DATA_LIST_1, USE_OF_YOUR_DATA_LIST_10, USE_OF_YOUR_DATA_LIST_11, USE_OF_YOUR_DATA_LIST_12, USE_OF_YOUR_DATA_LIST_13, USE_OF_YOUR_DATA_LIST_14, USE_OF_YOUR_DATA_LIST_15, USE_OF_YOUR_DATA_LIST_2, USE_OF_YOUR_DATA_LIST_3, USE_OF_YOUR_DATA_LIST_4, USE_OF_YOUR_DATA_LIST_5, USE_OF_YOUR_DATA_LIST_6, USE_OF_YOUR_DATA_LIST_7, USE_OF_YOUR_DATA_LIST_8, USE_OF_YOUR_DATA_LIST_9 } from '../../utils/contents';

export default function PrivacyPolicyPage() {
    return (
        <div className="vertical-sm horizontal-md infoPages termsAndPolicy">
            <div className="section">             
                <div className="title">{PRIVACY_POLICY}</div>
                <div className="body">{LAST_UPDATED}</div>
                <div className="body">{PRIVACY_POLICY_CONTENT_1}</div>
                <div className="body">{PRIVACY_POLICY_CONTENT_2}</div>
            </div>

            <div className="section">
                <div className="title">{INTERPRETATION}</div>
                <div className="body">{INTERPRETATION_CONTENT}</div>
            </div>

            <div className="section">
                <div className="title">{DEFINITIONS}</div>
                <div className="body">{DEFINITIONS_CONTENT}</div>
                <ul>
                    <li className="body">{DEFINITIONS_LIST_1}</li>
                    <li className="body">{DEFINITIONS_LIST_2}</li>
                    <li className="body">{DEFINITIONS_LIST_3}</li>
                    <li className="body">{DEFINITIONS_LIST_4}</li>
                    <li className="body">{DEFINITIONS_LIST_5}</li>
                    <li className="body">{DEFINITIONS_LIST_6}</li>
                    <li className="body">{DEFINITIONS_LIST_7}</li>
                    <li className="body">{DEFINITIONS_LIST_8}</li>
                    <li className="body">{DEFINITIONS_LIST_9}</li>
                    <li className="body">{DEFINITIONS_LIST_10}</li>
                    <li className="body">{DEFINITIONS_LIST_11}</li>
                    <li className="body">{DEFINITIONS_LIST_12}</li>
                </ul>
            </div>

            <div className="section">
                <div className="title">{COLLECTING_USING_DATA}</div>
                <div className="body italized">{TYPES_OF_DATA_COLLECTED}</div>
                <div className="body italized">{PERSONAL_DATA}</div>
                <div className="body">{COLLECTING_USING_DATA_CONTENT}</div>
                <ul>
                    <li className="body">{COLLECTING_USING_DATA_LIST_1}</li>
                    <li className="body">{COLLECTING_USING_DATA_LIST_2}</li>
                    <li className="body">{COLLECTING_USING_DATA_LIST_3}</li>
                    <li className="body">{COLLECTING_USING_DATA_LIST_4}</li>
                    <li className="body">{COLLECTING_USING_DATA_LIST_5}</li>
                </ul>
            </div>

            <div className="section">
                <div className="title">{USAGE_DATA}</div>
                <div className="body">{USAGE_DATA_CONTENT_1}</div>
                <div className="body">{USAGE_DATA_CONTENT_2}</div>
                <div className="body">{USAGE_DATA_CONTENT_3}</div>
                <div className="body">{USAGE_DATA_CONTENT_4}</div>
            </div>

            <div className="section">
                <div className="title">{TRACKING_TECH_AND_COOKIES}</div>
                <div className="body">{TRACKING_TECH_AND_COOKIES_CONTENT_1}</div>

                <ul>
                    <li className="body">{TRACKING_TECH_AND_COOKIES_LIST_1}</li>
                    <li className="body">{TRACKING_TECH_AND_COOKIES_LIST_2}</li>
                    <li className="body">{TRACKING_TECH_AND_COOKIES_LIST_3}</li>
                </ul>

                <div className="body">{TRACKING_TECH_AND_COOKIES_CONTENT_2}</div>
                <div className="body">{TRACKING_TECH_AND_COOKIES_CONTENT_3}</div>

                <ul>
                    <li className="body">{TRACKING_TECH_AND_COOKIES_LIST_4}</li>
                    <li className="body noBullet">{TRACKING_TECH_AND_COOKIES_LIST_4A}</li>
                    <li className="body noBullet">{TRACKING_TECH_AND_COOKIES_LIST_4B}</li>
                    <li className="body noBullet">{TRACKING_TECH_AND_COOKIES_LIST_4C}</li>
                    <li className="body">{TRACKING_TECH_AND_COOKIES_LIST_5}</li>
                    <li className="body noBullet">{TRACKING_TECH_AND_COOKIES_LIST_5A}</li>
                    <li className="body noBullet">{TRACKING_TECH_AND_COOKIES_LIST_5B}</li>
                    <li className="body noBullet">{TRACKING_TECH_AND_COOKIES_LIST_5C}</li>
                    <li className="body">{TRACKING_TECH_AND_COOKIES_LIST_6}</li>
                    <li className="body noBullet">{TRACKING_TECH_AND_COOKIES_LIST_6A}</li>
                    <li className="body noBullet">{TRACKING_TECH_AND_COOKIES_LIST_6B}</li>
                    <li className="body noBullet">{TRACKING_TECH_AND_COOKIES_LIST_6C}</li>
                </ul>

                <div className="body">{TRACKING_TECH_AND_COOKIES_CONTENT_4}</div>
            </div>

            <div className="section">
                <div className="title">{USE_OF_YOUR_DATA}</div>
                <div className="body">{USE_OF_YOUR_DATA_CONTENT_1}</div>
                <ul>
                    <li className="body">{USE_OF_YOUR_DATA_LIST_1}</li>
                    <li className="body">{USE_OF_YOUR_DATA_LIST_2}</li>
                    <li className="body">{USE_OF_YOUR_DATA_LIST_3}</li>
                    <li className="body">{USE_OF_YOUR_DATA_LIST_4}</li>
                    <li className="body">{USE_OF_YOUR_DATA_LIST_5}</li>
                    <li className="body">{USE_OF_YOUR_DATA_LIST_6}</li>
                    <li className="body">{USE_OF_YOUR_DATA_LIST_7}</li>
                    <li className="body">{USE_OF_YOUR_DATA_LIST_8}</li>
                </ul>
                <div className="body">{USE_OF_YOUR_DATA_CONTENT_2}</div>
                <ul>
                    <li className="body">{USE_OF_YOUR_DATA_LIST_9}</li>
                    <li className="body">{USE_OF_YOUR_DATA_LIST_10}</li>
                    <li className="body">{USE_OF_YOUR_DATA_LIST_11}</li>
                    <li className="body">{USE_OF_YOUR_DATA_LIST_12}</li>
                    <li className="body">{USE_OF_YOUR_DATA_LIST_13}</li>
                    <li className="body">{USE_OF_YOUR_DATA_LIST_14}</li>
                    <li className="body">{USE_OF_YOUR_DATA_LIST_15}</li>
                </ul>
            </div>

            <div className="section">
                <div className="title">{RETENTION_PERSONAL_DATA}</div>
                <div className="body">{RETENTION_PERSONAL_DATA_CONTENT_1}</div>
                <div className="body">{RETENTION_PERSONAL_DATA_CONTENT_2}</div>
            </div>

            <div className="section">
                <div className="title">{TRANSFER_PERSONAL_DATA}</div>
                <div className="body">{TRANSFER_PERSONAL_DATA_CONTENT_1}</div>
                <div className="body">{TRANSFER_PERSONAL_DATA_CONTENT_2}</div>
                <div className="body">{TRANSFER_PERSONAL_DATA_CONTENT_3}</div>
            </div>

            <div className="section">
                <div className="title">{DISCLOSURE_PERSONAL_DATA}</div>
            </div>

            <div className="section">
                <div className="title">{BUSINESS_TRANSACTIONS}</div>
                <div className="body">{BUSINESS_TRANSACTIONS_CONTENT}</div>
            </div>

            <div className="section">
                <div className="title">{LAW_ENFORCEMENT}</div>
                <div className="body">{LAW_ENFORCEMENT_CONTENT}</div>
            </div>

            <div className="section">
                <div className="title">{OTHER_LEGAL_REQUIREMENT}</div>
                <div className="body">{OTHER_LEGAL_REQUIREMENT_CONTENT}</div>
                <ul>
                    <li className="body">{OTHER_LEGAL_REQUIREMENT_LIST_1}</li>
                    <li className="body">{OTHER_LEGAL_REQUIREMENT_LIST_2}</li>
                    <li className="body">{OTHER_LEGAL_REQUIREMENT_LIST_3}</li>
                    <li className="body">{OTHER_LEGAL_REQUIREMENT_LIST_4}</li>
                    <li className="body">{OTHER_LEGAL_REQUIREMENT_LIST_5}</li>
                </ul>
            </div>

            <div className="section">
                <div className="title">{SECURITY_PERSONAL_DATA}</div>
                <div className="body">{SECURITY_PERSONAL_DATA_CONTENT}</div>
            </div>

            <div className="section">
                <div className="title">{CHILDRENS_POLICY}</div>
                <div className="body">{CHILDRENS_POLICY_CONTENT_1}</div>
                <div className="body">{CHILDRENS_POLICY_CONTENT_2}</div>
            </div>

            <div className="section">
                <div className="title">{LINKS_TO_OTHER_WEBSITE}</div>
                <div className="body">{LINKS_TO_OTHER_WEBSITE_CONTENT_1}</div>
                <div className="body">{LINKS_TO_OTHER_WEBSITE_CONTENT_2}</div>
            </div>

            <div className="section">
                <div className="title">{CHANGES_TO_PRIVACY_POLICY}</div>
                <div className="body">{CHANGES_TO_PRIVACY_POLICY_CONTENT_1}</div>
                <div className="body">{CHANGES_TO_PRIVACY_POLICY_CONTENT_2}</div>
                <div className="body">{CHANGES_TO_PRIVACY_POLICY_CONTENT_3}</div>
            </div>

            <div className="section">
                <div className="title">{CONTACT_US}</div>
                <div className="body">{CONTACT_US_CONTENT}</div>
                <ul>
                    <li className="body">{BY_EMAIL} {TTG_EMAIL}</li>
                </ul>
            </div>
        </div>
    );
}
