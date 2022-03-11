import React from 'react';
import { ACCESS_TO_THE_SITE, ADDITIONAL_RULES_CONTENT, ADDITIONAL_RULES_EMPHASIS, TTG_ADDRESS, APPLICABILITY_ARBITRATION_CONTENT, APPLICABILITY_ARBITRATION_EMPHASIS, ARBITRATION_RULES_CONTENT, ARBITRATION_RULES_EMPHASIS, AUTHORITY_ARBITRATOR_CONTENT, AUTHORITY_ARBITRATOR_EMPHASIS, CERTAIN_RESTRICTIONS_CONTENT, CERTAIN_RESTRICTIONS_CONTENT_2, CERTAIN_RESTRICTIONS_EMPHASIS, CLAIMS_NOT_SUBJECT_CONTENT, CLAIMS_NOT_SUBJECT_CONTENT_1, CLAIMS_NOT_SUBJECT_CONTENT_2, CLAIMS_NOT_SUBJECT_CONTENT_3, CLAIMS_NOT_SUBJECT_EMPHASIS, CONFIDENTIALITY_CONTENT, CONFIDENTIALITY_EMPHASIS, CONTACT_INFORMATION, COOKIES_WEB_CONTENT, COOKIES_WEB_EMPHASIS, COPYRIGHT_CONTENT, COPYRIGHT_EMPHASIS, COPYRIGHT_POLICY, COPYRIGHT_POLICY_CONTENT_1, COPYRIGHT_POLICY_CONTENT_2, COPYRIGHT_POLICY_LIST_1, COPYRIGHT_POLICY_LIST_2, COPYRIGHT_POLICY_LIST_3, COPYRIGHT_POLICY_LIST_4, COPYRIGHT_POLICY_LIST_5, COPYRIGHT_POLICY_LIST_6, COPYRIGHT_POLICY_LIST_7, DISCLAIMERS, DISCLAIMERS_CONTENT_1, DISCLAIMERS_CONTENT_2, ELECTRONIC_COMMUNICATIONS_CONTENT, ELECTRONIC_COMMUNICATIONS_EMPHASIS, TTG_EMAIL, EMERGENCY_EQUITABLE_CONTENT, EMERGENCY_EQUITABLE_EMPHASIS, ENTIRE_TERMS_CONTENT, ENTIRE_TERMS_EMPHASIS, GENERAL, GENERAL_CONTENT, GOOGLE_DOUBLECLICK_CONTENT, GOOGLE_DOUBLECLICK_EMPHASIS, LIMITATION_LIABILITY, LIMITATION_LIABILITY_CONTENT_1, LIMITATION_LIABILITY_CONTENT_2, LIMITATION_LIABILITY_CONTENT_3, NOTICE_REQUIREMENT_CONTENT, NOTICE_REQUIREMENT_EMPHASIS, NO_SUPPORT_MAINTENANCE_CONTENT, NO_SUPPORT_MAINTENANCE_CONTENT_2, NO_SUPPORT_MAINTENANCE_EMPHASIS, OTHER_USERS_CONTENT, OTHER_USERS_CONTENT_2, OTHER_USERS_EMPHASIS, OUR_ADVERTISING_PARTNERS_CONTENT, OUR_ADVERTISING_PARTNERS_EMPHASIS, OUR_ADVERTISING_PARTNERS_LIST_1_LINK, OUR_ADVERTISING_PARTNERS_LIST_1_NAME, RIGHT_TO_WAIVE_CONTENT, RIGHT_TO_WAIVE_EMPHASIS, SEVERABILITY_CONTENT, SEVERABILITY_EMPHASIS, SMALL_CLAIMS_COURT_CONTENT, SMALL_CLAIMS_COURT_EMPHASIS, SUBJECT_TO_TERMS_EMPHASIS, SURVIVAL_OF_AGREEMENT_CONTENT, SURVIVAL_OF_AGREEMENT_EMPHASIS, TERMS_OF_USE, TERMS_OF_USE_SECTION_1, TERMS_OF_USE_SECTION_2, TERMS_OF_USE_SECTION_3, TERMS_OF_USE_SECTION_4, TERMS_OF_USE_VER_NUM, TERM_AND_TERMINATION_CONTENT, TERM_AND_TERMINATION_EMPHASIS, THIRD_PARTY_LINKS, THIRD_PARTY_LINKS_CONTENT, THIRD_PARTY_LINKS_EMPHASIS, TIME_LIMITS_CONTENT, TIME_LIMITS_EMPHASIS, WAIVER_OF_CLASS_CONTENT, WAIVER_OF_CLASS_EMPHASIS, WAIVER_OF_JURY_CONTENT, WAIVER_OF_JURY_EMPHASIS, YOUR_PRIVACY_CONTENT, YOUR_PRIVACY_EMPHASIS } from '../../utils/contents';

import "./InfoPages.css";

export default function TermsOfUsePage() {
    return (
       <div className="vertical-sm horizontal-md infoPages termsAndPolicy">
            <div className="section">             
                <div className="title">{TERMS_OF_USE}</div>
                <div className="body italized">{TERMS_OF_USE_VER_NUM}</div>
                <div className="body">{TERMS_OF_USE_SECTION_1}</div>
                <div className="body">{TERMS_OF_USE_SECTION_2}</div>
                <div className="body">{TERMS_OF_USE_SECTION_3}</div>
                <div className="body">{TERMS_OF_USE_SECTION_4}</div>
            </div>

            <div className="section">             
                <div className="title">{ACCESS_TO_THE_SITE}</div>
                <div className="body">
                    <div className="subtitle">{SUBJECT_TO_TERMS_EMPHASIS}</div> {CLAIMS_NOT_SUBJECT_CONTENT}
                </div>
                <div className="body">
                    <div className="subtitle">{CERTAIN_RESTRICTIONS_EMPHASIS}</div> {CERTAIN_RESTRICTIONS_CONTENT}
                </div>
                <div className="body">{CERTAIN_RESTRICTIONS_CONTENT_2}</div>
                <div className="body">
                    <div className="subtitle">{NO_SUPPORT_MAINTENANCE_EMPHASIS}</div> {NO_SUPPORT_MAINTENANCE_CONTENT}
                </div>
                <div className="body">{NO_SUPPORT_MAINTENANCE_CONTENT_2}</div>
            </div>

            <div className="section">             
                <div className="title">{THIRD_PARTY_LINKS}</div>
                <div className="body">
                    <div className="subtitle">{THIRD_PARTY_LINKS_EMPHASIS}</div> {THIRD_PARTY_LINKS_CONTENT}
                </div>
                <div className="body">
                    <div className="subtitle">{OTHER_USERS_EMPHASIS}</div> {OTHER_USERS_CONTENT}
                </div>
                <div className="body">{OTHER_USERS_CONTENT_2}</div>

                <div className="body">
                    <div className="subtitle">{COOKIES_WEB_EMPHASIS}</div> {COOKIES_WEB_CONTENT}
                </div>
                
                <div className="body">
                    <div className="subtitle">{GOOGLE_DOUBLECLICK_EMPHASIS}</div> {GOOGLE_DOUBLECLICK_CONTENT}
                </div>

                <div className="body">
                    <div className="subtitle">{OUR_ADVERTISING_PARTNERS_EMPHASIS}</div> {OUR_ADVERTISING_PARTNERS_CONTENT}
                </div>

                <ul>
                    <li className="body">{OUR_ADVERTISING_PARTNERS_LIST_1_NAME}</li>
                    <li className="body noBullet">{OUR_ADVERTISING_PARTNERS_LIST_1_LINK}</li>
                </ul>
                
            </div>

            <div className="section">             
                <div className="title">{DISCLAIMERS}</div>
                <div className="body">{DISCLAIMERS_CONTENT_1}</div>
                <div className="body">{DISCLAIMERS_CONTENT_2}</div>
            </div>

            <div className="section">             
                <div className="title">{LIMITATION_LIABILITY}</div>
                <div className="body">{LIMITATION_LIABILITY_CONTENT_1}</div>
                <div className="body">{LIMITATION_LIABILITY_CONTENT_2}</div>
                <div className="body">{LIMITATION_LIABILITY_CONTENT_3}</div>
                <div className="body">
                    <div className="subtitle">{TERM_AND_TERMINATION_EMPHASIS}</div> {TERM_AND_TERMINATION_CONTENT}
                </div>
            </div>

            <div className="section">             
                <div className="title">{COPYRIGHT_POLICY}</div>
                <div className="body">{COPYRIGHT_POLICY_CONTENT_1}</div>
                <ul>
                    <li className="body">{COPYRIGHT_POLICY_LIST_1}</li>
                    <li className="body">{COPYRIGHT_POLICY_LIST_2}</li>
                    <li className="body">{COPYRIGHT_POLICY_LIST_3}</li>
                    <li className="body">{COPYRIGHT_POLICY_LIST_4}</li>
                    <li className="body">{COPYRIGHT_POLICY_LIST_5}</li>
                    <li className="body">{COPYRIGHT_POLICY_LIST_6}</li>
                    <li className="body">{COPYRIGHT_POLICY_LIST_7}</li>
                </ul>
                <div className="body">{COPYRIGHT_POLICY_CONTENT_2}</div>
            </div>

            <div className="section">             
                <div className="title">{GENERAL}</div>
                <div className="body">{GENERAL_CONTENT}</div>
                <div className="body">
                    <div className="subtitle">{APPLICABILITY_ARBITRATION_EMPHASIS}</div> {APPLICABILITY_ARBITRATION_CONTENT}
                </div>
                <div className="body">
                    <div className="subtitle">{NOTICE_REQUIREMENT_EMPHASIS}</div> {NOTICE_REQUIREMENT_CONTENT}
                </div>

                <div className="body">
                    <div className="subtitle">{ARBITRATION_RULES_EMPHASIS}</div> {ARBITRATION_RULES_CONTENT}
                </div>
                <div className="body">
                    <div className="subtitle">{ADDITIONAL_RULES_EMPHASIS}</div> {ADDITIONAL_RULES_CONTENT}
                </div>
                <div className="body">
                    <div className="subtitle">{TIME_LIMITS_EMPHASIS}</div> {TIME_LIMITS_CONTENT}
                </div>
                <div className="body">
                    <div className="subtitle">{AUTHORITY_ARBITRATOR_EMPHASIS}</div> {AUTHORITY_ARBITRATOR_CONTENT}
                </div>
                <div className="body">
                    <div className="subtitle">{WAIVER_OF_JURY_EMPHASIS}</div> {WAIVER_OF_JURY_CONTENT}
                </div>
                <div className="body">
                    <div className="subtitle">{WAIVER_OF_CLASS_EMPHASIS}</div> {WAIVER_OF_CLASS_CONTENT}
                </div>
                <div className="body">
                    <div className="subtitle">{CONFIDENTIALITY_EMPHASIS}</div> {CONFIDENTIALITY_CONTENT}
                </div>
                <div className="body">
                    <div className="subtitle">{SEVERABILITY_EMPHASIS}</div> {SEVERABILITY_CONTENT}
                </div>
                <div className="body">
                    <div className="subtitle">{RIGHT_TO_WAIVE_EMPHASIS}</div> {RIGHT_TO_WAIVE_CONTENT}
                </div>

                <div className="body">
                    <div className="subtitle">{SURVIVAL_OF_AGREEMENT_EMPHASIS}</div> {SURVIVAL_OF_AGREEMENT_CONTENT}
                </div>
                <div className="body">
                    <div className="subtitle">{SMALL_CLAIMS_COURT_EMPHASIS}</div> {SMALL_CLAIMS_COURT_CONTENT}
                </div>
                <div className="body">
                    <div className="subtitle">{EMERGENCY_EQUITABLE_EMPHASIS}</div> {EMERGENCY_EQUITABLE_CONTENT}
                </div>

                <div className="body">
                    <div className="subtitle">{CLAIMS_NOT_SUBJECT_EMPHASIS}</div> {CLAIMS_NOT_SUBJECT_CONTENT}
                </div>

                <div className="body">{CLAIMS_NOT_SUBJECT_CONTENT_1}</div>
                <div className="body">{CLAIMS_NOT_SUBJECT_CONTENT_2}</div>
                <div className="body">{CLAIMS_NOT_SUBJECT_CONTENT_3}</div>

                <div className="body">
                    <div className="subtitle">{ELECTRONIC_COMMUNICATIONS_EMPHASIS}</div> {ELECTRONIC_COMMUNICATIONS_CONTENT}
                </div>
                <div className="body">
                    <div className="subtitle">{ENTIRE_TERMS_EMPHASIS}</div> {ENTIRE_TERMS_CONTENT}
                </div>
                <div className="body">
                    <div className="subtitle">{YOUR_PRIVACY_EMPHASIS}</div> {YOUR_PRIVACY_CONTENT}
                </div>
                <div className="body">
                    <div className="subtitle">{COPYRIGHT_EMPHASIS}</div> {COPYRIGHT_CONTENT}
                </div>
            </div>

            <div className="section">             
                <div className="title">{CONTACT_INFORMATION}</div>
                <div className="body">{"Address: " + TTG_ADDRESS}</div>
                <div className="body">{"Email: " + TTG_EMAIL}</div>
            </div>
        </div>
    );
}
