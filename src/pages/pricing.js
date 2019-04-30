import React from "react";
/* import { Link } from "gatsby" */

import Layout from "../components/layout";
import SEO from "../components/seo";
import Image from "../components/image";
import "../styles/pages/pricing.scss";

const SecondPage = () => (
  <Layout>
    <SEO title="Pricing" />
    <section id="pricing">
      <aside className="text-container">
        <h3>Pricing for every project</h3>
        <h4>Start testing your site today!</h4>
        <h4>We'll scale to your needs as you grow.</h4>
      </aside>
      <aside class="grid grid--plans">
        <div class="card tier1">
          <div>
            <h3 class="badge">Starter</h3>
            <p class="bold-price">
              $0
              <small>/month</small>
            </p>
            <p>
              Great for hosting personal projects, hobby sites, or experiments.
            </p>
          </div>
          <ul>
            <li>Split testing</li>
            <li>Instant Git integration</li>
            <li>Continuous deployment</li>
            <li>Deploy previews</li>
            <li>Up to 5 audience creations</li>
          </ul>
          <div className="button-container">
            <p>
              <a href="https://app.netlify.com/signup" className="button">
                Get started for free
              </a>
            </p>
          </div>
        </div>
        <section class="card tier2">
          <div>
            <h3 class="badge">Pro</h3>
            <h2>Our Most Popular Plan</h2>
            <p class="bold-price">
              $45
              <small>/month</small>
            </p>
            <p>
              For pro developers building pilot projects or small sites. Starter
              features plus...
            </p>
          </div>
          <ul>
            <li>Unlimited Audience Creation</li>
            <li>24/5 support team</li>
            <li>Real Time Data Analytics</li>
            <li>Multiple owners</li>
            <li>Slack &amp; email notifications</li>
          </ul>
          <div className="button-container">
            <p>
              <a href="https://app.netlify.com/signup" className="button">
                Get started
              </a>
            </p>
          </div>
        </section>
        <section class="card tier3">
          <div>
            <h3 class="badge">Business</h3>
            <p class="bold-price">
              $500+
              <small>/month</small>
            </p>
            <p>Custom packages designed for the needs of your company. </p>
          </div>
          <ul>
            <li>Big Data Analytics</li>
            <li>Security: SSO, RBAC, full audit logs</li>
            <li>24x7x365 premium support options</li>
            <li>Enterprise-level CDN</li>
            <li>99.99% uptime SLA</li>
          </ul>
          <div className="button-container">
            <p>
              <a href="https://www.netlify.com/enterprise/" className="button">
                Contact sales
              </a>
            </p>
          </div>
        </section>
      </aside>
    </section>
    <section className="wave-container">
      <Image className="wave" filename={"wave.svg"} alt={"description"} />
      <section id="teams">
        <header>
          <h2>Plan details</h2>
          <p>
            From solo work to enterprise teams with advanced roles &amp;
            permissions.
          </p>
        </header>
        <details class="details" open>
          <summary>
            <h3>Full feature list</h3>
            <p class="subdued">A detailed comparison of our plans.</p>
          </summary>
          <table class="table">
            <thead>
              <tr>
                <th scope="col" class="visuallyhidden">
                  Features
                </th>
                <th scope="col" class="tier1" id="features-team-starter">
                  <span class="badge">Starter</span>
                </th>
                <th scope="col" class="tier2" id="features-team-pro">
                  <span class="badge">Pro</span>
                </th>
                <th scope="col" class="tier3" id="features-team-business">
                  <span class="badge">Business</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th colspan="4" scope="colgroup">
                  Netlify Dev features
                </th>
              </tr>

              <tr>
                <th scope="row" id="features-netlify-cli--dev-server">
                  Netlify CLI &amp; dev server
                </th>
                <td headers="features-team-starter features-netlify-cli--dev-server">
                    <Image className="checked" filename={"checked.svg"}/>
                </td>
                <td headers="features-team-pro features-netlify-cli--dev-server">
                <Image className="checked" filename={"checked.svg"}/>
                </td>
                <td headers="features-team-business features-netlify-cli--dev-server">
                <Image className="checked" filename={"checked.svg"}/>
                </td>
              </tr>

              <tr>
                <th scope="row" id="features-live-share-your-dev-environment">
                  Live share your dev environment
                </th>
                <td headers="features-team-starter features-live-share-your-dev-environment">
                  <Image className="checked" filename={"checked.svg"}/>
                </td>
                <td headers="features-team-pro features-live-share-your-dev-environment">
                  <Image className="checked" filename={"checked.svg"}/>
                </td>
                <td headers="features-team-business features-live-share-your-dev-environment">
                  <Image className="checked" filename={"checked.svg"}/>
                </td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <th colspan="4" scope="colgroup">
                  Netlify Build features
                </th>
              </tr>

              <tr>
                <th scope="row" id="features-included-team-members">
                  Included team members
                </th>
                <td headers="features-team-starter features-included-team-members">
                  1
                </td>
                <td headers="features-team-pro features-included-team-members">
                  3
                </td>
                <td headers="features-team-business features-included-team-members">
                  5
                </td>
              </tr>

              <tr>
                <th scope="row" id="features-extra-team-members">
                  Extra team members
                </th>
                <td headers="features-team-starter features-extra-team-members">
                  $15/user/month
                </td>
                <td headers="features-team-pro features-extra-team-members">
                  $15/user/month
                </td>
                <td headers="features-team-business features-extra-team-members">
                  $29/user/month
                </td>
              </tr>

              <tr>
                <th scope="row" id="features-multiple-owners">
                  Multiple owners
                </th>
                <td headers="features-team-starter features-multiple-owners">
                  <Image className="x-circle" filename={"x-circle.svg"}/>
                </td>
                <td headers="features-team-pro features-multiple-owners">
                  <Image className="checked" filename={"checked.svg"}/>
                </td>
                <td headers="features-team-business features-multiple-owners">
                  <Image className="checked" filename={"checked.svg"}/>
                </td>
              </tr>

              <tr>
                <th scope="row" id="features-concurrent-builds">
                  Concurrent builds
                </th>
                <td headers="features-team-starter features-concurrent-builds">
                  1 included
                </td>
                <td headers="features-team-pro features-concurrent-builds">
                  3 included
                </td>
                <td headers="features-team-business features-concurrent-builds">
                  5 included
                </td>
              </tr>

              <tr>
                <th scope="row" id="features-extra-concurrent-builds">
                  Extra concurrent builds
                </th>
                <td headers="features-team-starter features-extra-concurrent-builds">
                  <Image className="x-circle" filename={"x-circle.svg"}/>
                </td>
                <td headers="features-team-pro features-extra-concurrent-builds">
                  $40/each
                </td>
                <td headers="features-team-business features-extra-concurrent-builds">
                  $40/each
                </td>
              </tr>

              <tr>
                <th scope="row" id="features-priority-build-environment">
                  Priority build environment
                </th>
                <td headers="features-team-starter features-priority-build-environment">
                  <Image className="x-circle" filename={"x-circle.svg"}/>
                </td>
                <td headers="features-team-pro features-priority-build-environment">
                  <Image className="x-circle" filename={"x-circle.svg"}/>
                </td>
                <td headers="features-team-business features-priority-build-environment">
                  <Image className="checked" filename={"checked.svg"}/>
                </td>
              </tr>

              <tr>
                <th scope="row" id="features-unlimited-rollbacks">
                  Unlimited rollbacks
                </th>
                <td headers="features-team-starter features-unlimited-rollbacks">
                  <Image className="checked" filename={"checked.svg"}/>
                </td>
                <td headers="features-team-pro features-unlimited-rollbacks">
                  <Image className="checked" filename={"checked.svg"}/>
                </td>
                <td headers="features-team-business features-unlimited-rollbacks">
                  <Image className="checked" filename={"checked.svg"}/>
                </td>
              </tr>

              <tr>
                <th scope="row" id="features-branch-previews">
                  Branch previews
                </th>
                <td headers="features-team-starter features-branch-previews">
                  <Image className="checked" filename={"checked.svg"}/>
                </td>
                <td headers="features-team-pro features-branch-previews">
                  <Image className="checked" filename={"checked.svg"}/>
                </td>
                <td headers="features-team-business features-branch-previews">
                  <Image className="checked" filename={"checked.svg"}/>
                </td>
              </tr>

              <tr>
                <th scope="row" id="features-site-passwords">
                  Site passwords
                </th>
                <td headers="features-team-starter features-site-passwords">
                  <Image className="x-circle" filename={"x-circle.svg"}/>
                </td>
                <td headers="features-team-pro features-site-passwords">
                  <Image className="checked" filename={"checked.svg"}/>
                </td>
                <td headers="features-team-business features-site-passwords">
                  <Image className="checked" filename={"checked.svg"}/>
                </td>
              </tr>

              <tr>
                <th scope="row" id="features-email-notifications">
                  Email notifications
                </th>
                <td headers="features-team-starter features-email-notifications">
                  <Image className="x-circle" filename={"x-circle.svg"}/>
                </td>
                <td headers="features-team-pro features-email-notifications">
                  <Image className="checked" filename={"checked.svg"}/>
                </td>
                <td headers="features-team-business features-email-notifications">
                  <Image className="checked" filename={"checked.svg"}/>
                </td>
              </tr>

              <tr>
                <th scope="row" id="features-slack-notifications">
                  Slack notifications
                </th>
                <td headers="features-team-starter features-slack-notifications">
                  <Image className="x-circle" filename={"x-circle.svg"}/>
                </td>
                <td headers="features-team-pro features-slack-notifications">
                  <Image className="checked" filename={"checked.svg"}/>
                </td>
                <td headers="features-team-business features-slack-notifications">
                  <Image className="checked" filename={"checked.svg"}/>
                </td>
              </tr>

              <tr>
                <th scope="row" id="features-api-notifications">
                  API notifications
                </th>
                <td headers="features-team-starter features-api-notifications">
                  <Image className="x-circle" filename={"x-circle.svg"}/>
                </td>
                <td headers="features-team-pro features-api-notifications">
                  <Image className="x-circle" filename={"x-circle.svg"}/>
                </td>
                <td headers="features-team-business features-api-notifications">
                  <Image className="checked" filename={"checked.svg"}/>
                </td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <th colspan="4" scope="colgroup">
                  Netlify Edge features
                </th>
              </tr>

              <tr>
                <th scope="row" id="features-global-cdn-deployments">
                  Global CDN deployments
                </th>
                <td headers="features-team-starter features-global-cdn-deployments">
                  <Image className="checked" filename={"checked.svg"}/>
                </td>
                <td headers="features-team-pro features-global-cdn-deployments">
                  <Image className="checked" filename={"checked.svg"}/>
                </td>
                <td headers="features-team-business features-global-cdn-deployments">
                  <Image className="checked" filename={"checked.svg"}/>
                </td>
              </tr>

              <tr>
                <th scope="row" id="features-instant-cache-invalidation">
                  Instant cache invalidation
                </th>
                <td headers="features-team-starter features-instant-cache-invalidation">
                  <Image className="checked" filename={"checked.svg"}/>
                </td>
                <td headers="features-team-pro features-instant-cache-invalidation">
                  <Image className="checked" filename={"checked.svg"}/>
                </td>
                <td headers="features-team-business features-instant-cache-invalidation">
                  <Image className="checked" filename={"checked.svg"}/>
                </td>
              </tr>

              <tr>
                <th scope="row" id="features-99.99-uptime-sla">
                  99.99% uptime SLA
                </th>
                <td headers="features-team-starter features-99.99-uptime-sla">
                  <Image className="x-circle" filename={"x-circle.svg"}/>
                </td>
                <td headers="features-team-pro features-99.99-uptime-sla">
                  <Image className="x-circle" filename={"x-circle.svg"}/>
                </td>
                <td headers="features-team-business features-99.99-uptime-sla">
                  Available
                </td>
              </tr>

              <tr>
                <th scope="row" id="features-enterprise-cdn">
                  Enterprise CDN
                </th>
                <td headers="features-team-starter features-enterprise-cdn">
                  <Image className="x-circle" filename={"x-circle.svg"}/>
                </td>
                <td headers="features-team-pro features-enterprise-cdn">
                  <Image className="x-circle" filename={"x-circle.svg"}/>
                </td>
                <td headers="features-team-business features-enterprise-cdn">
                  Available
                </td>
              </tr>

              <tr>
                <th scope="row" id="features-secondary-dns">
                  Secondary DNS
                </th>
                <td headers="features-team-starter features-secondary-dns">
                  <Image className="x-circle" filename={"x-circle.svg"}/>
                </td>
                <td headers="features-team-pro features-secondary-dns">
                  <Image className="x-circle" filename={"x-circle.svg"}/>
                </td>
                <td headers="features-team-business features-secondary-dns">
                  Available
                </td>
              </tr>

              <tr>
                <th scope="row" id="features-bandwidth">
                  Bandwidth
                </th>
                <td headers="features-team-starter features-bandwidth">
                  100GB
                </td>
                <td headers="features-team-pro features-bandwidth">400GB</td>
                <td headers="features-team-business features-bandwidth">
                  600GB
                </td>
              </tr>

              <tr>
                <th scope="row" id="features-extra-bandwidth">
                  Extra bandwidth
                </th>
                <td headers="features-team-starter features-extra-bandwidth">
                  $20/100GB
                </td>
                <td headers="features-team-pro features-extra-bandwidth">
                  $20/100GB
                </td>
                <td headers="features-team-business features-extra-bandwidth">
                  $20/100GB
                </td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <th colspan="4" scope="colgroup">
                  More features
                </th>
              </tr>

              <tr>
                <th scope="row" id="features-billing-admin-role">
                  Billing Admin role
                </th>
                <td headers="features-team-starter features-billing-admin-role">
                  <Image className="x-circle" filename={"x-circle.svg"}/>
                </td>
                <td headers="features-team-pro features-billing-admin-role">
                  <Image className="x-circle" filename={"x-circle.svg"}/>
                </td>
                <td headers="features-team-business features-billing-admin-role">
                  <Image className="checked" filename={"checked.svg"}/>
                </td>
              </tr>

              <tr>
                <th scope="row" id="features-enterprise-invoicing">
                  Enterprise invoicing
                </th>
                <td headers="features-team-starter features-enterprise-invoicing">
                  <Image className="x-circle" filename={"x-circle.svg"}/>
                </td>
                <td headers="features-team-pro features-enterprise-invoicing">
                  <Image className="x-circle" filename={"x-circle.svg"}/>
                </td>
                <td headers="features-team-business features-enterprise-invoicing">
                  Available
                </td>
              </tr>

              <tr>
                <th scope="row" id="features-24x7-premium-support">
                  24x7 premium support
                </th>
                <td headers="features-team-starter features-24x7-premium-support">
                  <Image className="x-circle" filename={"x-circle.svg"}/>
                </td>
                <td headers="features-team-pro features-24x7-premium-support">
                  <Image className="x-circle" filename={"x-circle.svg"}/>
                </td>
                <td headers="features-team-business features-24x7-premium-support">
                  Available
                </td>
              </tr>

              <tr>
                <th scope="row" id="features-role-based-access-control">
                  Role-based access control
                </th>
                <td headers="features-team-starter features-role-based-access-control">
                  <Image className="x-circle" filename={"x-circle.svg"}/>
                </td>
                <td headers="features-team-pro features-role-based-access-control">
                  <Image className="x-circle" filename={"x-circle.svg"}/>
                </td>
                <td headers="features-team-business features-role-based-access-control">
                  <Image className="checked" filename={"checked.svg"}/>
                </td>
              </tr>

              <tr>
                <th scope="row" id="features-audit-logs">
                  Audit logs
                </th>
                <td headers="features-team-starter features-audit-logs">
                  <Image className="x-circle" filename={"x-circle.svg"}/>
                </td>
                <td headers="features-team-pro features-audit-logs">
                  7-day history
                </td>
                <td headers="features-team-business features-audit-logs">
                  Full history
                </td>
              </tr>

              <tr>
                <th scope="row" id="features-saml---sso">
                  SAML - SSO
                </th>
                <td headers="features-team-starter features-saml---sso">
                  <Image className="x-circle" filename={"x-circle.svg"}/>
                </td>
                <td headers="features-team-pro features-saml---sso">
                  <Image className="x-circle" filename={"x-circle.svg"}/>
                </td>
                <td headers="features-team-business features-saml---sso">
                  Available
                </td>
              </tr>

              <tr>
                <th scope="row" id="features-soc2-compliance">
                  SOC2 compliance
                </th>
                <td headers="features-team-starter features-soc2-compliance">
                  <Image className="x-circle" filename={"x-circle.svg"}/>
                </td>
                <td headers="features-team-pro features-soc2-compliance">
                  <Image className="x-circle" filename={"x-circle.svg"}/>
                </td>
                <td headers="features-team-business features-soc2-compliance">
                  Available
                </td>
              </tr>
            </tbody>
          </table>
        </details>
      </section>
    </section>
  </Layout>
);

export default SecondPage;
