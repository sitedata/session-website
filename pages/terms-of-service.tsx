import { ReactElement } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import Layout from '@/components/layout';
import { Headline } from '@/components/ui';

export default function TermsOfService(): ReactElement {
  const headingClasses = classNames('text-gray text-2xl font-medium mt-6');
  const listClasses = classNames('list-outside ml-8 leading-loose');
  return (
    <Layout title="Terms of Service - Session">
      <section>
        <div
          className={classNames(
            'container pt-6 pb-24 px-4 mx-auto',
            'md:p-12',
            'lg:pt-0 lg:pb-32'
          )}
        >
          <Headline
            color="gray-dark"
            classes={classNames(
              'font-helvetica font-extralight mb-6',
              'md:mb-16',
              'lg:mt-4'
            )}
          >
            Session Legal
          </Headline>
          <div
            className={classNames(
              'text-sm text-gray-lighter font-helvetica font-extralight leading-loose',
              'lg:text-base lg:max-w-screen-md lg:mx-auto'
            )}
          >
            <h1
              className={classNames(
                'text-gray text-3xl font-medium mb-2',
                'lg:text-5xl'
              )}
            >
              Session Terms of Service
            </h1>
            <p className={classNames('italic mb-8')}>
              Last Updated: 28/05/2021
            </p>
            <p>
              These Terms of Service (“Terms”) govern your access to and use of
              our services that are fully owned and operated by the Oxen Privacy
              Tech Foundation (referred to as “we”, “our”, “OPTF”) including the
              Session website and the Session Private Messenger applications,
              including Linux, Windows, Mac OS, Android and Mac iOS
              (collectively, referred to as the “Services”) and any information,
              text, links, graphics, videos, audio or other material uploaded,
              downloaded or appearing on the Services (collectively, referred to
              as “Content”).
            </p>
            <br />
            <p>
              These Terms and the Session Privacy Policy form the End User
              Agreement between you and the OPTF.
            </p>
            <br />
            <p>
              The Services are fully owned and delivered by the Oxen Privacy
              Tech Foundation (OPTF), a not-for-profit charity registered in
              Australia.
            </p>
            <br />
            <h2 className={headingClasses}>1. Who can use the Services</h2>
            <p>
              Anyone who is not barred from using the Services under the laws of
              the applicable jurisdiction, and is at least 13 years of age can
              use the Service. If you are living in the United Kingdom or a
              European Union country, you must be at least 16 years old.
            </p>
            <br />
            <p>
              By using these Services, you agree to form a binding End User
              Agreement between you and the OPTF.
            </p>
            <br />
            <p>
              If you are accepting these Terms and using the Services on behalf
              of a company, organization, government, or other legal entity, you
              represent and warrant that you are authorized to do so and have
              the authority to bind such entity to these Terms, in which case
              the words “you” and “your” as used in these Terms shall refer to
              such entity.
            </p>
            <br />
            <h2 className={headingClasses}>2. Our Privacy Policy</h2>
            <p>
              Privacy is central to our purpose and mission. For more details,
              please refer to the Session{' '}
              <Link href="/privacy-policy">
                <a className={classNames('text-primary-dark')} target="_blank">
                  Privacy Policy
                </a>
              </Link>
              .
            </p>
            <br />
            <h2 className={headingClasses}>3. Our Services</h2>
            <p>
              Our Services are intended to inform you and educate you about
              using our private and secure communications app (Session Website),
              and facilitate private and secure communications between two or
              more parties, or within a closed group or within an open group
              (Session, or Session App).
            </p>
            <br />
            <h3 className={headingClasses}>3.1. Using the Session Website</h3>
            <p>
              The purpose of the Session Website is primarily to provide you
              with information about the Session App and link to download of the
              Session App. We have done our best to make sure this information
              is accurate and up-to-date, however, there may be unintentional
              errors that may mislead you. Therefore, we encourage you to
              contact us for any clarifications you may need.
            </p>
            <br />
            <p>
              The Session Website also enables you to submit your contact
              details, so we are able to keep you informed about our work.
            </p>
            <br />
            <h3 className={headingClasses}>3.2. Using the Session App</h3>
            <p>
              The purpose of the Session App is to facilitate private and secure
              communications, without capturing or sharing any meta-data. It was
              intentionally created for use by individuals who require anonymity
              and security.
            </p>
            <br />
            <p>
              <b>What do we mean by ‘private’?</b> The Session App does not
              require you to identify yourself in any way or associate your
              personally identifiable information including phone numbers or
              email addresses with the account you create on the Session App
              (known as a Session ID). The onion-routing technology behind
              Session means that your communications are not only free of
              meta-data, but you can also be completely anonymous and
              untraceable. There is no way for us, or anyone else to link your
              Session ID with your real identity — unless you create such a link
              by indicating your real identity through your communications, or
              associating your real identity with your Session ID through some
              other means.
            </p>
            <br />
            <p>
              <b>What do we mean by ‘secure’?</b> The messages you create on
              your Session App are encrypted and only the destination Session ID
              can dy-encrypt the message. The encrypted messages are wrapped in
              multiple layers of onion encryption and routed from the Session
              App through our distributed onion network before reaching their
              destination. While we make every effort to ensure security, we
              cannot be held responsible for any interception or decryption
              using advanced technologies, now or in the future.
            </p>
            <br />
            <p>
              The Session App is a messaging app, and does not have the ability
              to communicate with non-Session Apps or services. Our Services do
              not provide access to public emergency service providers like the
              police, fire department, hospitals, or other public safety
              organizations.
            </p>
            <br />
            <h2 className={headingClasses}>
              4. Our Responsibilities and Commitments to You
            </h2>
            <p>
              We are committed to ensuring the delivery of our Services in a way
              that is accessible and reliable.
            </p>
            <br />
            <p>
              We will not sell or otherwise monetise your personal data or
              content in any way. We cannot access your data even if we wanted
              to, as Session preserves the privacy and secrecy of your messages.
              See our Privacy Policy for more information.
            </p>
            <br />
            <p>
              Session’s License to You — Session grants you a limited,
              revocable, non-exclusive, and non-transferable license to use our
              Services in accordance with these Terms.
            </p>
            <br />
            <p>
              Availability of Our Services — We strive to ensure that our
              Services are continuously available for use. However, there may be
              occasions when they are interrupted, including for maintenance,
              upgrades, or to resolve network or equipment failures. We may
              discontinue some or all of our Services, including certain
              features and the support for certain devices and platforms.
            </p>
            <br />
            <p>
              Keeping you informed — We continuously provide updates about our
              Services through various channels, including the Session Blog,
              Session Twitter Account and a number of community groups on
              Session and on Telegram. Where possible, we will strive to keep
              you updated about outages and service disruptions through these
              channels.
            </p>
            <br />
            <h2 className={headingClasses}>
              5. Your Responsibilities and Rights
            </h2>
            <h3 className={headingClasses}>
              5.1. Account Management and General Use
            </h3>
            <p>
              Software and account — You are responsible for keeping your
              device, Session App and your account up-to-date, safe and secure,
              including being responsible for any passwords or recovery phrases.
            </p>
            <br />
            <p>
              Fees and Taxes — You are responsible for data and mobile carrier
              fees and taxes associated with the devices on which you use our
              Services.
            </p>
            <br />
            <p>
              Terms and Policies — You must use our Services according to our
              Terms and policies. If we block your device for a breach of our
              Terms, you will not create another account without our permission.
            </p>
            <br />
            <p>
              Legal and Acceptable Use — You agree to use our Services only for
              legal, authorized, and acceptable purposes. You will not use (or
              assist others in using) our Services in ways that: (a) violate or
              infringe the rights of Session, our users, or others, including
              privacy, publicity, intellectual property, or other rights; (b)
              involve sending illegal or impermissible communications such as
              bulk messaging, auto-messaging, and auto-dialing; (c) breach the
              Session Content Policy described further below.
            </p>
            <br />
            <p>
              Harm to Session — You must not (or assist others to) access, use,
              modify, distribute, transfer, or exploit our Services in
              unauthorised manners, or in ways that harm Session, our Services,
              or systems. For example you must not (a) gain or try to gain
              unauthorised access to our Services or systems; (b) disrupt the
              integrity or performance of our Services; (c) create accounts for
              our Services through unauthorized or automated means; (d) collect
              information about other Session users in any unauthorised manner;
              or (e) sell, rent, or charge for our Services.
            </p>
            <br />
            <p>
              Third-party services — Our Services may allow you to access, use,
              or interact with third-party websites, apps, content, and other
              products and services run by third parties. When you use
              third-party services, their terms and privacy policies govern your
              use of those services. When using Open Groups operated by
              third-parties, these Terms as well as any terms or policies
              associated with the Open Group will govern your use.
            </p>
            <br />
            <p>
              Open Group by Session — You may use Open Groups run by Session in
              accordance with these Terms of Service, however, you also agree to
              follow the rules of the specific Open Group.
            </p>
            <br />
            <p>
              Your Content — You own and/or take responsibility for the content
              (text messages, audio, video, images) you submit through our
              Services. We can not access this information unless you explicitly
              send it to us, or it is published in an Open Group.
            </p>
            <br />
            <p>
              Session’s Rights — You acknowledge that the OPTF owns all
              copyrights, trademarks, domains, logos, trade dress, trade
              secrets, patents, and other intellectual property rights
              associated with our Services. You may not use our copyrights,
              trademarks, domains, logos, trade dress, patents, and other
              intellectual property rights unless you have our written
              permission. To report copyright, trademark, or other intellectual
              property infringement, please contact support@78.47.201.78.
            </p>
            <br />
            <h3 className={headingClasses}>5.2. Session Content Policy</h3>
            <p>
              OPTF exists to build private and secure technology, and defend
              your right to privacy and security in the digital world. We are
              also mission-driven to uphold key democratic, media freedom and
              human rights principles.
            </p>
            <br />
            <p>
              To enable us to uphold our mission principles, we have identified
              the following activities of Session as a clear breach of these
              Terms.
            </p>
            <br />
            <p>
              <b>Violent Behaviour, Violent Extremism and Terrorism</b>
            </p>
            <br />
            <p>Session cannot be used to:</p>
            <br />
            <ul className={classNames(listClasses, 'list-disc')}>
              <li>
                to glorify violence, or promote violence of any form (physical,
                psychological, sexual) against another individual or group, or
                incite harm or directly attack or threaten other people on the
                basis of race, ethnicity, national origin, caste, sexual
                orientation, gender, gender identity, religious affiliation,
                age, disability, or serious disease.
              </li>
              <li>
                by organisations, groups and individuals designated by the
                United Nations as terrorist organisations or terrorists.
              </li>
            </ul>
            <br />
            <p>
              <b>Child Sexual Exploitation</b>
            </p>
            <br />
            <p>
              Session cannot be used to organise or promote child sexual
              exploitation. A child is defined as anyone under the age of 18.
              Specifically, Session cannot be used to store or share:
            </p>
            <br />
            <ul className={classNames(listClasses, 'list-disc')}>
              <li>
                visual depictions of a child engaging in sexually explicit or
                sexually suggestive acts;
              </li>
              <li>
                illustrated, computer-generated or other forms of realistic
                depictions of a human child in a sexually explicit context, or
                engaging in sexually explicit acts;
              </li>
              <li>
                sexualized commentaries about or directed at a known or unknown
                minor;
              </li>
              <li>
                links to third-party sites that host child sexual exploitation
                material;
              </li>
              <li>
                fantasies about or promoting engagement in child sexual
                exploitation;
              </li>
              <li>
                recruiting, advertising or expressing an interest in a
                commercial sex act involving a child, or in harboring and/or
                transporting a child for sexual purposes.
              </li>
            </ul>
            <br />
            <p>
              <b>Extremely Violence and/or Graphic Content</b>
            </p>
            <br />
            <p>
              Session cannot be used to store or share violent or gory content
              that is intended to shock or disgust others, or create harm or
              distress to the person or persons represented in the content.
            </p>
            <br />
            <h2 className={headingClasses}>6.0 Monitoring Session Breaches</h2>
            <p>
              Our Services have been created using a privacy-by-design approach
              which means that it is impossible for us to analyse or monitor
              your content you create and store on the Session App, or share it
              with other users.
            </p>
            <br />
            <p>
              Open Groups on Session, by their nature, are open to the public,
              and the content posted shared through Open Groups can be
              monitored. OPTF does not have the capacity to monitor all Open
              Groups, however, we do make a concerted effort to monitor and
              where necessary moderate Open Groups that have been created by us.
            </p>
            <br />
            <h3 className={headingClasses}>
              6.1 Third-party notification of breaches
            </h3>
            <p>
              We may be notified by third-parties of breaches to these Terms. In
              such cases, the evidence presented by the third-parties will be
              accessed by our Board and Members, to determine the severity of
              the breach and the required outcomes. We may engage external
              experts to further assist and inform us. The decisions made by our
              Board and Members will be final.
            </p>
            <br />
            <p>
              All notifications, including requests for information or take down
              notices, will be documented in our Transparency Report that is
              updated every three months.
            </p>
            <br />
            <h2 className={headingClasses}>7.0 Disclaimers and Limitations</h2>
            <p>
              Disclaimers — YOU USE OUR SERVICES AT YOUR OWN RISK AND SUBJECT TO
              THE FOLLOWING DISCLAIMERS. WE PROVIDE OUR SERVICES ON AN “AS IS”
              BASIS WITHOUT ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT
              NOT LIMITED TO, WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
              PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, AND FREEDOM FROM
              COMPUTER VIRUS OR OTHER HARMFUL CODE. Session DOES NOT WARRANT
              THAT ANY INFORMATION PROVIDED BY US IS ACCURATE, COMPLETE, OR
              USEFUL, THAT OUR SERVICES WILL BE OPERATIONAL, ERROR-FREE, SECURE,
              OR SAFE, OR THAT OUR SERVICES WILL FUNCTION WITHOUT DISRUPTIONS,
              DELAYS, OR IMPERFECTIONS. WE DO NOT CONTROL, AND ARE NOT
              RESPONSIBLE FOR, CONTROLLING HOW OR WHEN OUR USERS USE OUR
              SERVICES. WE ARE NOT RESPONSIBLE FOR THE ACTIONS OR INFORMATION
              (INCLUDING CONTENT) OF OUR USERS OR OTHER THIRD PARTIES. YOU
              RELEASE US, AFFILIATES, DIRECTORS, OFFICERS, EMPLOYEES, PARTNERS,
              AND AGENTS (TOGETHER, “SESSION PARTIES”) FROM ANY CLAIM,
              COMPLAINT, CAUSE OF ACTION, CONTROVERSY, OR DISPUTE (TOGETHER,
              “CLAIM”) AND DAMAGES, KNOWN AND UNKNOWN, RELATING TO, ARISING OUT
              OF, OR IN ANY WAY CONNECTED WITH ANY SUCH CLAIM YOU HAVE AGAINST
              ANY THIRD PARTIES.
            </p>
            <br />
            <p>
              Limitation of Liability — THE SESSION PARTIES WILL NOT BE LIABLE
              TO YOU FOR ANY LOST PROFITS OR CONSEQUENTIAL, SPECIAL, PUNITIVE,
              INDIRECT, OR INCIDENTAL DAMAGES RELATING TO, ARISING OUT OF, OR IN
              ANY WAY IN CONNECTION WITH OUR TERMS, US, OR OUR SERVICES, EVEN IF
              THE SESSION PARTIES HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH
              DAMAGES. OUR AGGREGATE LIABILITY RELATING TO, ARISING OUT OF, OR
              IN ANY WAY IN CONNECTION WITH OUR TERMS, US, OR OUR SERVICES WILL
              NOT EXCEED TEN DOLLARS ($10). THE FOREGOING DISCLAIMER OF CERTAIN
              DAMAGES AND LIMITATION OF LIABILITY WILL APPLY TO THE MAXIMUM
              EXTENT PERMITTED BY APPLICABLE LAW. THE LAWS OF SOME STATES OR
              JURISDICTIONS MAY NOT ALLOW THE EXCLUSION OR LIMITATION OF CERTAIN
              DAMAGES, SO SOME OR ALL OF THE EXCLUSIONS AND LIMITATIONS SET
              FORTH ABOVE MAY NOT APPLY TO YOU. NOTWITHSTANDING ANYTHING TO THE
              CONTRARY IN OUR TERMS, IN SUCH CASES, THE LIABILITY OF THE SESSION
              PARTIES WILL BE LIMITED TO THE FULLEST EXTENT PERMITTED BY
              APPLICABLE LAW.
            </p>
            <br />
            <h2 className={headingClasses}>
              8.0. Resolving Disputes and Ending Terms
            </h2>
            <p>
              Resolving disputes — You agree to resolve any Claim you have with
              us relating to or arising out of our Terms, us, or our Services
              exclusively in the state of Victoria, Australia. You also agree to
              submit to the personal jurisdiction of such courts for the purpose
              of litigating all such disputes. The laws of Australia govern our
              Terms, as well as any disputes, whether in court or arbitration,
              which might arise between Session and you, without regard to
              conflict of law provisions.
            </p>
            <br />
            <p>
              Ending these Terms — You may end these Terms with Session at any
              time by deleting Session from your device and discontinuing use of
              our Services. We may modify, suspend, or terminate your access to
              or use of our Services anytime for any reason, such as if you
              violate the letter or spirit of our Terms or create harm, risk, or
              possible legal exposure for Session. The following provisions will
              survive termination of your relationship with Session: “Licenses,”
              “Disclaimers,” “Limitation of Liability,” “Resolving dispute,”
              “Availability” and “Ending these Terms,” and “General”.
            </p>
            <br />
            <h2 className={headingClasses}>9.0 These Terms</h2>
            <p>
              Session may update the Terms at any time. When we update our
              Terms, We will update the “Last Modified” date associated with the
              updated Terms. Your continued use of our Services confirms your
              acceptance of our updated Terms and supersedes any prior agreed
              Terms. You will comply with all applicable export control and
              trade sanctions laws. Our Terms cover the entire agreement between
              you and Session regarding our Services. If you do not agree with
              our Terms, you should stop using our Services.
            </p>
            <br />
            <p>
              If we fail to enforce our Terms, we do not waive the right to
              enforce them. If any provision of the Terms is deemed unlawful,
              void, or unenforceable, that provision shall be deemed severable
              from our Terms and shall not affect the enforceability of the
              remaining provisions. Our Services are not intended for
              distribution to or use in any country where such distribution or
              use would violate local law or would subject us to any regulations
              in another country. If you have specific questions about these
              Terms, please contact us at support@78.47.201.78.
            </p>
            <br />
            <h2 className={headingClasses}>
              Session iOS – End User License Agreement
            </h2>
            <p>
              By using the Session iOS app (“App”), you not only agree to the
              Terms of Service and Privacy Policy of Session, but also this End
              User License Agreement (“EULA”).
            </p>
            <br />
            <ol className={classNames(listClasses, 'list-decimal')}>
              <li>
                <b>Acknowledgement</b>: You acknowledge that this EULA is
                concluded between LAG Foundation Ltd (“Session”), and not with
                Apple, Inc (“Apple”), and Session, not Apple, is solely
                responsible for the Licensed Application and the content
                thereof.
              </li>
              <li>
                <b>Scope of License</b>: Subject to your compliance with our
                Terms of Service, Session grants you a limited, non-exclusive,
                non-transferable, revocable license to download and use the App.
              </li>
              <li>
                <b>Maintenance and Support</b>: Session provides no guarantee
                that We will supply you with maintenance or support beyond what
                already exists on our documentation and github pages. Apple has
                no obligation whatsoever to furnish any maintenance and support
                services with respect to the App.
              </li>
              <li>
                <b>Warranty</b>: Our warrant can be found in our Terms of
                Service, which you agree to. In the event of any failure of the
                Licensed Application to conform to the warranty, You may notify
                Apple, and Apple will refund the purchase price for the App. To
                the maximum extent permitted by applicable law, Apple will have
                no other warranty obligation whatsoever with respect to the App,
                and any other claims, losses, liabilities, damages, costs or
                expenses attributable to any failure to conform to any warranty
                will be handled in accordance with the Session Terms of Service.
              </li>
              <li>
                <b>Product Claims</b>: Session, and not Apple, is responsible
                for addressing any claims relating to the App or its use,
                including, but not limited to: (i) product liability claims;
                (ii) any claim that the Licensed Application fails to conform to
                any applicable legal or regulatory requirement; and (iii) claims
                arising under consumer protection, privacy, or similar
                legislation. This is handled in accordance with the Session
                Terms of Service.
              </li>
              <li>
                <b>Intellectual Property Rights</b>: Session, and not Apple, is
                responsible for all intellectual property issues associated with
                the app. This is covered in our Terms of Service.
              </li>
              <li>
                <b>Legal Compliance</b>: You represent and warrant that (i)
                he/she is not located in a country that is subject to a U.S.
                Government embargo, or that has been designated by the U.S.
                Government as a “terrorist supporting” country; and (ii) he/she
                is not listed on any U.S. Government list of prohibited or
                restricted parties.
              </li>
              <li>
                <b>Developer Name and Address</b>: If you have questions about
                the Terms of Service or this EULA, you may email
                support@78.47.201.78 (LAG Foundation Ltd, Level 1 452 Flinders
                Street Melbourne VIC 3000 Australia)
              </li>
              <li>
                <b>Third Party Terms of Agreement</b>: You must comply with
                applicable third party terms of agreement when using the App, if
                any such third party applications exist.
              </li>
              <li>
                <b>Third Party Beneficiary</b>: Session and You acknowledge and
                agree that Apple, and Apple’s subsidiaries, are third party
                beneficiaries of this EULA, and that, upon Your acceptance of
                the Terms of Service and this EULA, Apple will have the right
                (and will be deemed to have accepted the right) to enforce the
                EULA against You as a third party beneficiary thereof.
              </li>
              <li>
                <b>Unacceptable Content</b>: You acknowledge that you are
                subject to acceptable content policies within Open Groups and
                other areas on the app and must not use the App to distribute
                objectionable content. If you are deemed an abusive user you may
                also be restricted or removed from Groups or the App if reported
                or discovered.
              </li>
            </ol>
            <br />
            <h2 className={headingClasses}>Conclusion</h2>
            <p>
              This page outlines the Terms of Service for the Session app,
              services, and website, as well as the End User License Agreement
              for iOS. If you’d like to read more about how we handle your
              privacy, you can check out the Session privacy policy. If you have
              any questions, opinions, or concerns about Session’s Terms, please
              get in touch with us via email at support@78.47.201.78.
            </p>
            <br />
          </div>
        </div>
      </section>
    </Layout>
  );
}
