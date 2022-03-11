import React from 'react';
import { BUSINESS_TRANSACTIONS, BUSINESS_TRANSACTIONS_CONTENT, BY_EMAIL, CHANGES_TO_PRIVACY_POLICY, CHANGES_TO_PRIVACY_POLICY_CONTENT_1, CHANGES_TO_PRIVACY_POLICY_CONTENT_2, CHANGES_TO_PRIVACY_POLICY_CONTENT_3, CHILDRENS_POLICY, CHILDRENS_POLICY_CONTENT_1, CHILDRENS_POLICY_CONTENT_2, COLLECTING_USING_DATA, COLLECTING_USING_DATA_CONTENT, COLLECTING_USING_DATA_LIST_1, COLLECTING_USING_DATA_LIST_2, COLLECTING_USING_DATA_LIST_3, COLLECTING_USING_DATA_LIST_4, COLLECTING_USING_DATA_LIST_5, CONTACT_US, CONTACT_US_CONTENT, DEFINITIONS, DEFINITIONS_CONTENT, DEFINITIONS_LIST_1, DEFINITIONS_LIST_10, DEFINITIONS_LIST_11, DEFINITIONS_LIST_12, DEFINITIONS_LIST_2, DEFINITIONS_LIST_3, DEFINITIONS_LIST_4, DEFINITIONS_LIST_5, DEFINITIONS_LIST_6, DEFINITIONS_LIST_7, DEFINITIONS_LIST_8, DEFINITIONS_LIST_9, DISCLOSURE_PERSONAL_DATA, INTERPRETATION, INTERPRETATION_CONTENT, LAST_UPDATED, LAW_ENFORCEMENT, LAW_ENFORCEMENT_CONTENT, LINKS_TO_OTHER_WEBSITE, LINKS_TO_OTHER_WEBSITE_CONTENT_1, LINKS_TO_OTHER_WEBSITE_CONTENT_2, OTHER_LEGAL_REQUIREMENT, OTHER_LEGAL_REQUIREMENT_CONTENT, OTHER_LEGAL_REQUIREMENT_LIST_1, OTHER_LEGAL_REQUIREMENT_LIST_2, OTHER_LEGAL_REQUIREMENT_LIST_3, OTHER_LEGAL_REQUIREMENT_LIST_4, OTHER_LEGAL_REQUIREMENT_LIST_5, PERSONAL_DATA, PRIVACY_POLICY, PRIVACY_POLICY_CONTENT_1, PRIVACY_POLICY_CONTENT_2, RETENTION_PERSONAL_DATA, RETENTION_PERSONAL_DATA_CONTENT_1, RETENTION_PERSONAL_DATA_CONTENT_2, SECURITY_PERSONAL_DATA, SECURITY_PERSONAL_DATA_CONTENT, TTG_EMAIL, TRACKING_TECH_AND_COOKIES, TRACKING_TECH_AND_COOKIES_CONTENT_1, TRACKING_TECH_AND_COOKIES_CONTENT_2, TRACKING_TECH_AND_COOKIES_CONTENT_3, TRACKING_TECH_AND_COOKIES_CONTENT_4, TRACKING_TECH_AND_COOKIES_LIST_1, TRACKING_TECH_AND_COOKIES_LIST_2, TRACKING_TECH_AND_COOKIES_LIST_3, TRACKING_TECH_AND_COOKIES_LIST_4, TRACKING_TECH_AND_COOKIES_LIST_4A, TRACKING_TECH_AND_COOKIES_LIST_4B, TRACKING_TECH_AND_COOKIES_LIST_4C, TRACKING_TECH_AND_COOKIES_LIST_5, TRACKING_TECH_AND_COOKIES_LIST_5A, TRACKING_TECH_AND_COOKIES_LIST_5B, TRACKING_TECH_AND_COOKIES_LIST_5C, TRACKING_TECH_AND_COOKIES_LIST_6, TRACKING_TECH_AND_COOKIES_LIST_6A, TRACKING_TECH_AND_COOKIES_LIST_6B, TRACKING_TECH_AND_COOKIES_LIST_6C, TRANSFER_PERSONAL_DATA, TRANSFER_PERSONAL_DATA_CONTENT_1, TRANSFER_PERSONAL_DATA_CONTENT_2, TRANSFER_PERSONAL_DATA_CONTENT_3, TYPES_OF_DATA_COLLECTED, USAGE_DATA, USAGE_DATA_CONTENT_1, USAGE_DATA_CONTENT_2, USAGE_DATA_CONTENT_3, USAGE_DATA_CONTENT_4, USE_OF_YOUR_DATA, USE_OF_YOUR_DATA_CONTENT_1, USE_OF_YOUR_DATA_CONTENT_2, USE_OF_YOUR_DATA_LIST_1, USE_OF_YOUR_DATA_LIST_10, USE_OF_YOUR_DATA_LIST_11, USE_OF_YOUR_DATA_LIST_12, USE_OF_YOUR_DATA_LIST_13, USE_OF_YOUR_DATA_LIST_14, USE_OF_YOUR_DATA_LIST_15, USE_OF_YOUR_DATA_LIST_2, USE_OF_YOUR_DATA_LIST_3, USE_OF_YOUR_DATA_LIST_4, USE_OF_YOUR_DATA_LIST_5, USE_OF_YOUR_DATA_LIST_6, USE_OF_YOUR_DATA_LIST_7, USE_OF_YOUR_DATA_LIST_8, USE_OF_YOUR_DATA_LIST_9 } from '../../utils/contents';

import "./InfoPages.css";

export default function PrivacyPolicyPage() {
    return (
        <div className="vertical-sm horizontal-sm specialFont body-xs termsOfUse">

            <div className="vertical-sm">
                <h3>{PRIVACY_POLICY}</h3>
                <p>{LAST_UPDATED}</p>
                <p>{PRIVACY_POLICY_CONTENT_1}</p>
                <p>{PRIVACY_POLICY_CONTENT_2}</p>
            </div>

            <div className="vertical-sm">
                <h3>{INTERPRETATION}</h3>
                <p>{INTERPRETATION_CONTENT}</p>
            </div>

            <div className="vertical-sm">
                <h3>{DEFINITIONS}</h3>
                <p>{DEFINITIONS_CONTENT}</p>
                <ul>
                    <li>{DEFINITIONS_LIST_1}</li>
                    <li>{DEFINITIONS_LIST_2}</li>
                    <li>{DEFINITIONS_LIST_3}</li>
                    <li>{DEFINITIONS_LIST_4}</li>
                    <li>{DEFINITIONS_LIST_5}</li>
                    <li>{DEFINITIONS_LIST_6}</li>
                    <li>{DEFINITIONS_LIST_7}</li>
                    <li>{DEFINITIONS_LIST_8}</li>
                    <li>{DEFINITIONS_LIST_9}</li>
                    <li>{DEFINITIONS_LIST_10}</li>
                    <li>{DEFINITIONS_LIST_11}</li>
                    <li>{DEFINITIONS_LIST_12}</li>
                </ul>
            </div>

            <div className="vertical-sm">
                <h3>{COLLECTING_USING_DATA}</h3>
                <p><em>{TYPES_OF_DATA_COLLECTED}</em></p>
                <p><em>{PERSONAL_DATA}</em></p>
                <p>{COLLECTING_USING_DATA_CONTENT}</p>
                <ul>
                    <li>{COLLECTING_USING_DATA_LIST_1}</li>
                    <li>{COLLECTING_USING_DATA_LIST_2}</li>
                    <li>{COLLECTING_USING_DATA_LIST_3}</li>
                    <li>{COLLECTING_USING_DATA_LIST_4}</li>
                    <li>{COLLECTING_USING_DATA_LIST_5}</li>
                </ul>
            </div>

            <div className="vertical-sm">
                <h3>{USAGE_DATA}</h3>
                <p>{USAGE_DATA_CONTENT_1}</p>
                <p>{USAGE_DATA_CONTENT_2}</p>
                <p>{USAGE_DATA_CONTENT_3}</p>
                <p>{USAGE_DATA_CONTENT_4}</p>
            </div>

            <div className="vertical-sm">
                <h3>{TRACKING_TECH_AND_COOKIES}</h3>
                <p>{TRACKING_TECH_AND_COOKIES_CONTENT_1}</p>
                <ul>
                    <li>{TRACKING_TECH_AND_COOKIES_LIST_1}</li>
                    <li>{TRACKING_TECH_AND_COOKIES_LIST_2}</li>
                    <li>{TRACKING_TECH_AND_COOKIES_LIST_3}</li>
                </ul>
                <p>{TRACKING_TECH_AND_COOKIES_CONTENT_2}</p>
                <p>{TRACKING_TECH_AND_COOKIES_CONTENT_3}</p>
                <ul>
                    <li>{TRACKING_TECH_AND_COOKIES_LIST_4}</li>
                    <li className="body noBullet">{TRACKING_TECH_AND_COOKIES_LIST_4A}</li>
                    <li className="body noBullet">{TRACKING_TECH_AND_COOKIES_LIST_4B}</li>
                    <li className="body noBullet">{TRACKING_TECH_AND_COOKIES_LIST_4C}</li>
                    <li>{TRACKING_TECH_AND_COOKIES_LIST_5}</li>
                    <li className="body noBullet">{TRACKING_TECH_AND_COOKIES_LIST_5A}</li>
                    <li className="body noBullet">{TRACKING_TECH_AND_COOKIES_LIST_5B}</li>
                    <li className="body noBullet">{TRACKING_TECH_AND_COOKIES_LIST_5C}</li>
                    <li>{TRACKING_TECH_AND_COOKIES_LIST_6}</li>
                    <li className="body noBullet">{TRACKING_TECH_AND_COOKIES_LIST_6A}</li>
                    <li className="body noBullet">{TRACKING_TECH_AND_COOKIES_LIST_6B}</li>
                    <li className="body noBullet">{TRACKING_TECH_AND_COOKIES_LIST_6C}</li>
                </ul>
                <p>{TRACKING_TECH_AND_COOKIES_CONTENT_4}</p>
            </div>

            <div className="vertical-sm">
                <h3>{USE_OF_YOUR_DATA}</h3>
                <p>{USE_OF_YOUR_DATA_CONTENT_1}</p>
                <ul>
                    <li>{USE_OF_YOUR_DATA_LIST_1}</li>
                    <li>{USE_OF_YOUR_DATA_LIST_2}</li>
                    <li>{USE_OF_YOUR_DATA_LIST_3}</li>
                    <li>{USE_OF_YOUR_DATA_LIST_4}</li>
                    <li>{USE_OF_YOUR_DATA_LIST_5}</li>
                    <li>{USE_OF_YOUR_DATA_LIST_6}</li>
                    <li>{USE_OF_YOUR_DATA_LIST_7}</li>
                    <li>{USE_OF_YOUR_DATA_LIST_8}</li>
                </ul>
                <p>{USE_OF_YOUR_DATA_CONTENT_2}</p>
                <ul>
                    <li>{USE_OF_YOUR_DATA_LIST_9}</li>
                    <li>{USE_OF_YOUR_DATA_LIST_10}</li>
                    <li>{USE_OF_YOUR_DATA_LIST_11}</li>
                    <li>{USE_OF_YOUR_DATA_LIST_12}</li>
                    <li>{USE_OF_YOUR_DATA_LIST_13}</li>
                    <li>{USE_OF_YOUR_DATA_LIST_14}</li>
                    <li>{USE_OF_YOUR_DATA_LIST_15}</li>
                </ul>
            </div>

            <div className="vertical-sm">
                <h3>{RETENTION_PERSONAL_DATA}</h3>
                <p>{RETENTION_PERSONAL_DATA_CONTENT_1}</p>
                <p>{RETENTION_PERSONAL_DATA_CONTENT_2}</p>
            </div>

            <div className="vertical-sm">
                <h3>{TRANSFER_PERSONAL_DATA}</h3>
                <p>{TRANSFER_PERSONAL_DATA_CONTENT_1}</p>
                <p>{TRANSFER_PERSONAL_DATA_CONTENT_2}</p>
                <p>{TRANSFER_PERSONAL_DATA_CONTENT_3}</p>
            </div>

            <div className="vertical-sm">
                <h3>{DISCLOSURE_PERSONAL_DATA}</h3>
            </div>

            <div className="vertical-sm">
                <h3>{BUSINESS_TRANSACTIONS}</h3>
                <p>{BUSINESS_TRANSACTIONS_CONTENT}</p>
            </div>

            <div className="vertical-sm">
                <h3>{LAW_ENFORCEMENT}</h3>
                <p>{LAW_ENFORCEMENT_CONTENT}</p>
            </div>

            <div className="vertical-sm">
                <h3>{OTHER_LEGAL_REQUIREMENT}</h3>
                <p>{OTHER_LEGAL_REQUIREMENT_CONTENT}</p>
                <ul>
                    <li>{OTHER_LEGAL_REQUIREMENT_LIST_1}</li>
                    <li>{OTHER_LEGAL_REQUIREMENT_LIST_2}</li>
                    <li>{OTHER_LEGAL_REQUIREMENT_LIST_3}</li>
                    <li>{OTHER_LEGAL_REQUIREMENT_LIST_4}</li>
                    <li>{OTHER_LEGAL_REQUIREMENT_LIST_5}</li>
                </ul>
            </div>

            <div className="vertical-sm">
                <h3>{SECURITY_PERSONAL_DATA}</h3>
                <p>{SECURITY_PERSONAL_DATA_CONTENT}</p>
            </div>
            <div className="vertical-sm">
                <h3>{CHILDRENS_POLICY}</h3>
                <p>{CHILDRENS_POLICY_CONTENT_1}</p>
                <p>{CHILDRENS_POLICY_CONTENT_2}</p>
            </div>
            <div className="vertical-sm">
                <h3>{LINKS_TO_OTHER_WEBSITE}</h3>
                <p>{LINKS_TO_OTHER_WEBSITE_CONTENT_1}</p>
                <p>{LINKS_TO_OTHER_WEBSITE_CONTENT_2}</p>
            </div>
            <div className="vertical-sm">
                <h3>{CHANGES_TO_PRIVACY_POLICY}</h3>
                <p>{CHANGES_TO_PRIVACY_POLICY_CONTENT_1}</p>
                <p>{CHANGES_TO_PRIVACY_POLICY_CONTENT_2}</p>
                <p>{CHANGES_TO_PRIVACY_POLICY_CONTENT_3}</p>
            </div>

            <div className="vertical-sm">
                <h3>{CONTACT_US}</h3>
                <p>{CONTACT_US_CONTENT}</p>
                <ul>
                    <li>{BY_EMAIL} {TTG_EMAIL}</li>
                </ul>
            </div>
        </div>
    );
}
