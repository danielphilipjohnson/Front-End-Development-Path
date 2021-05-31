// load initial item
window.addEventListener("DOMContentLoaded", function () {
  function setupNav() {
    // maybe refactor these out to make it flexible
    const mobileButton = document.getElementById("mobile-nav-btn");
    const mobileButtonCloseNav = document.getElementById("mobile-close-nav");
    const mobileNav = document.getElementById("mobile-nav");

    function toggleNav() {
      mobileNav.classList.toggle("hidden");
    }
    mobileButton.addEventListener("click", toggleNav);

    mobileButtonCloseNav.addEventListener("click", toggleNav);

    return {
      removeToggleNavListner: function () {
        mobileButton.removeEventListener("click", toggleNav);
      },
      removeCloseButtonListner: function () {
        mobileButtonCloseNav.removeEventListener("click", toggleNav);
      },
    };
  }

  const fetchLinksMock = new Promise((resolve, reject) => {
    setTimeout(() => {
      const statusObj = { status: 200 };

      const { status } = statusObj;

      if (status == 200) {
        resolve([
          {
            page: "products",
            links: [
              {
                label: "payment",
                icon: "fas fa-credit-card",
                url: "products.html",
                text: "Online payments",
              },
              {
                label: "terminal",
                icon: "fas fa-credit-card",
                url: "products.html",
                text: "In-person payment",
              },
              {
                label: "connect",
                icon: "fas fa-credit-card",
                url: "products.html",
                text: "Payments for platforms",
              },
            ],
          },
          {
            page: "use cases",
            links: [
              {
                label: "Ecommerce",
                icon: "fas fa-shopping-cart",
                url: "products.html",
                text: "Unify online and in-person payments",
              },
              {
                label: "SaaS",
                icon: "fas fa-business-time",
                url: "products.html",
                text: "Manage recurring billing and subscriptions",
              },
              {
                label: "Marketplaces",
                icon: "fas fa-store",
                url: "products.html",
                text: "Pay out globally and facilitate multiparty payments",
              },
              {
                label: "Platforms",
                icon: "fas fa-layer-group",
                url: "products.html",
                text: "Let customers accept payments within your platform",
              },
            ],
          },
          {
            page: "developers",
            links: [
              {
                label: "documentation",
                icon: "fas fa-book",
                url: "products.html",
                text: "Start intergrating stripe's products and tools",
              },
              { label: "plugins", icon: "fas fa-book", url: "products.html" },
              { label: "libraries", icon: "fas fa-book", url: "products.html" },
              { label: "plugins", icon: "fas fa-book", url: "products.html" },
              { label: "billing", icon: "fas fa-book", url: "products.html" },
            ],
          },
          {
            page: "company",
            links: [
              {
                label: "About",
                icon: "fas fa-address-card",
                url: "products.html",
              },
              {
                label: "Customers",
                icon: "fas fa-box ",
                url: "products.html",
              },
              {
                label: "Enterprise",
                icon: "fas fa-door-open",
                url: "products.html",
              },
              {
                label: "Jobs",
                icon: "fas fa-briefcase",
                url: "products.html",
              },
            ],
          },
        ]);
      } else {
        reject(` Request failed with ${status}. Could not fetch ads`);
      }
    }, 300);
  });

  class SubMenu {
    constructor(elementLocation, data) {
      this.links = data;
      this.linkTags = [...document.querySelectorAll(".link-btn")];
      this.subMenu = document.querySelector(elementLocation);
      this.elementToCloseNav = document.getElementById("hero");

      this.createLinksCards();
      this.closeNavCardsEvent();
    }
    updateSubMenu(page) {
      const tempPage = this.links.find((link) => link.page === page);

      if (tempPage) {
        const { links } = tempPage;

        return `<section> 
        <div class="submenu-center flex flex-col  w-max-content">
        ${links
          .map((link) => {
            return `<a class="mb-4 flex " href="${link.url}">
            <i class="${link.icon} mt-1 mr-2 text-gray-500"></i>
            <div>
              <span class="font-bold text-gray-900">${link.label}</span> 
              ${link.text ? `<p class="text-gray-500">${link.text}</p>` : ""}
              </div>
            </a>
           `;
          })
          .join("")}
        </div>
    </section>`;
      }
    }
    moveSubMenu(target) {
      const tempLink = target.getBoundingClientRect();
      const center = (tempLink.left + tempLink.right) / 2;
      const bottom = tempLink.bottom - 3;

      this.subMenu.style.left = `${center}px`;
      this.subMenu.style.top = `${bottom}px`;
    }

    createLinksCards() {
      this.linkTags.forEach((link) => {
        link.addEventListener("mouseover", (e) => {
          const text = e.currentTarget.textContent.toLowerCase();

          this.updateSubMenu(text);
          this.moveSubMenu(e.target);

          this.subMenu.classList.add("show");
        });
      });
    }

    closeNavCardsEvent() {
      this.elementToCloseNav.addEventListener("mouseleave", (e) => {
        if (!e.target.classList.contains("link-btn")) {
          this.subMenu.classList.remove("show");
        }
      });
    }
  }

  fetchLinksMock.then((data) => {
    new SubMenu(".submenu", data);
    setupNav();
  });
});
