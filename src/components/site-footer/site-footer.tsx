import { Component } from "@stencil/core";

@Component({
  tag: "site-footer",
  styleUrl: "site-footer.scss"
})
export class SiteFooter {
  render() {
    return (
      <div class="site-footer">

        <div class="footer-links">
          <a
            target="_blank"
            href="https://twitter.com/fdom92"
            rel="noopener"
            title="This link opens my twitter account in a new tab."
          >
            <lazy-img src="../assets/logo-twitter.svg" alt="Twitter" />
          </a>
          <a
            target="_blank"
            href="https://github.com/Fdom92/"
            rel="noopener"
            title="This link opens my github account in a new tab."
          >
            <lazy-img src="../assets/logo-github.svg" alt="Github" />
          </a>
          <a
            target="_blank"
            href="https://linkedin.com/in/fdom92"
            rel="noopener"
            title="This link opens my linkedin account in a new tab."
          >
            <lazy-img src="../assets/logo-linkedin.svg" alt="Linkedin" />
          </a>
          <a
            target="_blank"
            href="https://stackoverflow.com/users/6691908/fernando-del-olmo"
            rel="noopener"
            title="This link opens my stackoverflow account in a new tab."
          >
            <lazy-img
              src="../assets/logo-stackoverflow.svg"
              alt="Stack-overflow"
            />
          </a>
        </div>

        <div class="spacer"/>

        <div class="footer-info-right">© 2018 Yagabu Golf</div>


       </div>
    );
  }
}
