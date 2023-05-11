import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, d as renderHead, e as renderSlot, f as addAttribute, u as unescapeHTML, F as Fragment } from '../astro.f61cc8fb.mjs';
/* empty css                           */
const $$Astro$d = createAstro();
const $$Burger = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Burger;
  return renderTemplate`

${maybeRenderHead($$result)}<div class="burger astro-D3JHUKWA">
    <div class="burger__line astro-D3JHUKWA"></div>
    <div class="burger__line astro-D3JHUKWA"></div>
    <div class="burger__line astro-D3JHUKWA"></div>
</div>`;
}, "E:/Pluto-Design/luminobyte/src/components/Burger.astro");

const $$Astro$c = createAstro();
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Navbar;
  return renderTemplate`

${maybeRenderHead($$result)}<header class="navbar astro-5BLMO7YK">
    <div class="astro-5BLMO7YK">
        <a href="#home" aria-label="Home" class="astro-5BLMO7YK">
            <img src="../assets/images/BulbLogo.png" class="logo astro-5BLMO7YK" alt="logo" width="75" height="75">
            <span id="luminobyte-logo" class="astro-5BLMO7YK">Luminobyte</span>
        </a>
        ${renderComponent($$result, "Burger", $$Burger, { "class": "astro-5BLMO7YK" })}
    </div>
    <nav class="astro-5BLMO7YK">
        <a class="nav-item astro-5BLMO7YK" aria-label="Games" href="#games">Games</a>
        <a class="nav-item astro-5BLMO7YK" aria-label="About" href="#about">About</a>
        <a class="nav-item astro-5BLMO7YK" aria-label="Apply" href="#apply">Apply</a>
        <a class="nav-item astro-5BLMO7YK" aria-label="Contact" href="#contact">Contact</a>
    </nav>
</header>`;
}, "E:/Pluto-Design/luminobyte/src/components/Navbar.astro");

const $$Astro$b = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width">
		<link rel="icon" type="image/svg+xml" href="/assets/svg/luminobyte.svg">
		<meta name="description" content="We are LuminoByte, a small indie game development team that strives for bright ideas, and to make awesome games for users! I founded the team on the 2nd of April 2023, so we haven't been around for long. But don't let that fool you - we are a passionate and dedicated group of individuals who are determined to create new and innovative games that will win over the hearts of players everywhere.">
		<meta property="og:title" content="Pluto Design - Custom Website Design">
		<meta property="og:type" content="website">
		<meta property="og:url" content="http://example.com/">
		<meta property="og:image" content="/assets/svg/luminobyte.svg">
		<meta property="og:description" content="We are LuminoByte, a small indie game development team that strives for bright ideas, and to make awesome games for users! I founded the team on the 2nd of April 2023, so we haven't been around for long. But don't let that fool you - we are a passionate and dedicated group of individuals who are determined to create new and innovative games that will win over the hearts of players everywhere.">
		<title>${title}</title>
	${renderHead($$result)}</head>
	<body>
		${renderSlot($$result, $$slots["default"])}
	</body></html>`;
}, "E:/Pluto-Design/luminobyte/src/layouts/Layout.astro");

const $$Astro$a = createAstro();
const $$GameCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$GameCard;
  const { text, imageUrl } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="game-card astro-LT7SNXJP">
    <img${addAttribute(imageUrl, "src")}${addAttribute(text, "alt")} class="astro-LT7SNXJP">
    <div class="game-card_inner astro-LT7SNXJP">
        <p class="astro-LT7SNXJP">${text}</p>
    </div>
</div>`;
}, "E:/Pluto-Design/luminobyte/src/components/GameCard.astro");

const $$Astro$9 = createAstro();
const $$Games = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Games;
  return renderTemplate`${maybeRenderHead($$result)}<section id="games" class="astro-J22SN5OL">
    ${renderComponent($$result, "GameCard", $$GameCard, { "imageUrl": "/assets/images/shooter-and-zombie.png", "text": "Exile's End", "class": "astro-J22SN5OL" })}
    ${renderComponent($$result, "GameCard", $$GameCard, { "imageUrl": "/assets/images/axe-zombies.png", "text": "The Walking Dead", "class": "astro-J22SN5OL" })}
    ${renderComponent($$result, "GameCard", $$GameCard, { "imageUrl": "/assets/images/h1z1-just-survive.png", "text": "H1Z1 Battle Royale", "class": "astro-J22SN5OL" })}
</section>`;
}, "E:/Pluto-Design/luminobyte/src/components/Games.astro");

const $$Astro$8 = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${maybeRenderHead($$result)}<section id="about" class="astro-V2CBYR3P">
    <div class="logo-long astro-V2CBYR3P">
        <img src="assets/svg/long_icon.svg" alt="logo-long" width="600" height="300" alt="logo long icon" class="astro-V2CBYR3P">
    </div>
    <div class="about-content astro-V2CBYR3P">
        <h1 class="astro-V2CBYR3P">Who are <span class="astro-V2CBYR3P">we</span>?</h1>
        <p class="about-content__text astro-V2CBYR3P">We are <span class="astro-V2CBYR3P">LuminoByte</span>,
            a small indie game 
            development team that strives 
            for <span class="astro-V2CBYR3P">bright ideas</span>, and to make 
            awesome games for users! The team 
            was founded on the 2nd of April 2023, 
            so we haven't been around for long. 
            But don't let that fool you - we are 
            a <span class="astro-V2CBYR3P">passionate and dedicated</span> group of 
            individuals who are determined to create 
            new and innovative games that will win 
            over the hearts of players everywhere.
        </p>
    </div>
</section>`;
}, "E:/Pluto-Design/luminobyte/src/components/About.astro");

const $$Astro$7 = createAstro();
const $$TeamCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$TeamCard;
  const { name, role, image, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="team-card astro-KOQWDSNO">
    <div class="team-card-hover_content astro-KOQWDSNO">
        <span class="astro-KOQWDSNO">${name}</span>
        <p class="astro-KOQWDSNO">${description}</p>
    </div>
    <img${addAttribute(image, "src")}${addAttribute(`${name} - ${role} team card`, "alt")} class="astro-KOQWDSNO">
    <div class="team-card__content astro-KOQWDSNO">
        <h3 class="astro-KOQWDSNO">${name}</h3>
        <p class="astro-KOQWDSNO">${role}</p>
    </div>
</div>`;
}, "E:/Pluto-Design/luminobyte/src/components/TeamCard.astro");

const $$Astro$6 = createAstro();
const $$MeetTheTeam = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$MeetTheTeam;
  return renderTemplate`${maybeRenderHead($$result)}<section id="meet-the-team" class="astro-T5UMS5HC">
    <h1 class="astro-T5UMS5HC">Meet the <span class="astro-T5UMS5HC">team</span></h1>

    <div class="team-members astro-T5UMS5HC">
        ${renderComponent($$result, "TeamCard", $$TeamCard, { "name": "@Miel", "role": "Founder", "image": "/assets/images/teampfp1.png", "description": "Greetings, friends! It's an absolute pleasure to introduce myself as Miel, the founder of LuminoByte. As the founder, I'm extremely glad and thankful to have such an incredible team of crew members on board. My passion lies in UI/UX design, with a little bit of game design thrown in for good measure. I can't wait what holds for us in the future in LuminoByte!", "class": "astro-T5UMS5HC" })}
        ${renderComponent($$result, "TeamCard", $$TeamCard, { "name": "@Paul", "role": "Programmer", "image": "/assets/images/teampfp2.png", "description": "Hey, it\u2019s Paul. If you\u2019re looking through this code base you might catch wind of a lingering idiosyncratic pedantry. That\u2019s me. Developer and rule-follower extraordinaire. Thanks for playing, don\u2019t break any rules.", "class": "astro-T5UMS5HC" })}
        ${renderComponent($$result, "TeamCard", $$TeamCard, { "name": "@JakeOJeff", "role": "Programmer", "image": "/assets/images/teampfp1.png", "description": "Hi! I'm Jake, the guy who doesn't even understand half the complicated terms Paul says, I program because I am jobless, I am experienced in game-making, and have been programming and inclusive in web development for over 8 - 9 years. Enjoy!", "class": "astro-T5UMS5HC" })}
        ${renderComponent($$result, "TeamCard", $$TeamCard, { "name": "@Deadzone", "role": "Programmer", "image": "/assets/images/teampfp1.png", "description": "Hi, I go by the name of Deadzone. I've learned a lot about Lua, and Javascript, and currently learning the Godot game engine. I've reached my first year of programming recently and I will try my best to answer any questions you may have.", "class": "astro-T5UMS5HC" })}
        ${renderComponent($$result, "TeamCard", $$TeamCard, { "name": "@sap", "role": "Deadzone", "image": "/assets/images/teampfp2.png", "description": "Hi everyone! My name is Tommy, but you can call me Sap! I'm a story writer/game designer and I started working on video games only 2 years ago, but I've improved a lot! Can't wait to share my stories with you all", "class": "astro-T5UMS5HC" })}
        ${renderComponent($$result, "TeamCard", $$TeamCard, { "name": "@GabrielX24", "role": "Artist", "image": "/assets/images/teampfp1.png", "description": "Hello everyone, im one of the art people here, you can call me Gabe. Ive been doing pixel art for the past three years and solo game developement for the last two or so, constantly in stress, and i hate everything i create, but i hope everyone enjoys it anyways. Enjoy your stay in the server!", "class": "astro-T5UMS5HC" })}
        ${renderComponent($$result, "TeamCard", $$TeamCard, { "name": "@Jon", "role": "Sound Designer | FSX", "image": "/assets/images/teampfp2.png", "description": "Hello! How's it goin? I'm Jon. I'm a long-time digital music producer of over 15 years. I'm new to making SFX for games but you're all stuck with me now. Thanks for playing games!", "class": "astro-T5UMS5HC" })}
    </div>
</section>`;
}, "E:/Pluto-Design/luminobyte/src/components/MeetTheTeam.astro");

const $$Astro$5 = createAstro();
const $$JobBar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$JobBar;
  const { text, applyLink, salary } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="astro-DRMUM5YD">
    <span class="astro-DRMUM5YD">
        <p class="astro-DRMUM5YD">${text}</p>
        <p class="astro-DRMUM5YD">${salary}</p>
    </span>
    <a${addAttribute(applyLink, "href")} class="astro-DRMUM5YD">Apply</a>
</div>`;
}, "E:/Pluto-Design/luminobyte/src/components/JobBar.astro");

const $$Astro$4 = createAstro();
const $$JobListing = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$JobListing;
  return renderTemplate`${maybeRenderHead($$result)}<section id="apply" class="astro-4Y52UIK7">
    <h1 class="astro-4Y52UIK7">JOIN OUR <span class="astro-4Y52UIK7">TEAM</span></h1>
    <p class="astro-4Y52UIK7">Job Listings:</p>
    <div class="jobs astro-4Y52UIK7">
        ${renderComponent($$result, "JobBar", $$JobBar, { "text": "Mid Unreal Engine Programmer", "salary": "$2300 - $3000", "applyLink": "https://www.linkedin.com/jobs/view/2670000000/", "class": "astro-4Y52UIK7" })}
        ${renderComponent($$result, "JobBar", $$JobBar, { "text": "Social Media Specialist", "salary": "$800 - $1000", "applyLink": "https://www.linkedin.com/jobs/view/2670000000/", "class": "astro-4Y52UIK7" })}
        ${renderComponent($$result, "JobBar", $$JobBar, { "text": "Story Writer", "salary": "$1200 - $1450", "applyLink": "https://www.linkedin.com/jobs/view/2670000000/", "class": "astro-4Y52UIK7" })}
    </div>
    <button class="astro-4Y52UIK7">See More</button>
</section>`;
}, "E:/Pluto-Design/luminobyte/src/components/JobListing.astro");

const $$Astro$3 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead($$result)}<footer id="contact" class="astro-SZ7XMLTE">
    <div class="logo astro-SZ7XMLTE">
        <img src="/assets/svg/long_icon.svg" alt="Luminobyte Logo" class="astro-SZ7XMLTE">
    </div>
    <div class="socials astro-SZ7XMLTE">
        <h1 class="astro-SZ7XMLTE">Contact us!</h1>
        <a href="mailto:kupa@gmail.com" class="astro-SZ7XMLTE">Email us!</a>
        <div class="socials__icons astro-SZ7XMLTE">
            <img src="/assets/svg/linkedin-icon.svg" alt="linkedin social media icon" class="icon astro-SZ7XMLTE">
            <img src="/assets/svg/facebook-icon.svg" alt="facebook social media icon" class="icon astro-SZ7XMLTE">
            <img src="/assets/svg/instagram-icon.svg" alt="instagram social media icon" class="icon astro-SZ7XMLTE">
        </div>
    </div>
    <p class="copyright astro-SZ7XMLTE">Website made by <a href="https://plutodesign.xyz" class="astro-SZ7XMLTE">Pluto Design</a></p>
</footer>`;
}, "E:/Pluto-Design/luminobyte/src/components/Footer.astro");

const $$Astro$2 = createAstro();
const $$Home = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Home;
  const { default: innerHTML } = await import('../expand_right_double.d9de81f3.mjs');
  return renderTemplate`${maybeRenderHead($$result)}<section class="astro-XHAOQXBD">
    <div class="content astro-XHAOQXBD">
        <p class="astro-XHAOQXBD">Shining a <span class="astro-XHAOQXBD">light</span> on unique gaming experiences</p>
    </div>
    
    <a class="arrow-down astro-XHAOQXBD" href="#games">
        ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(innerHTML)}` })}
    </a>
</section>`;
}, "E:/Pluto-Design/luminobyte/src/components/Home.astro");

const $$Astro$1 = createAstro();
const $$MainComponent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MainComponent;
  return renderTemplate`${maybeRenderHead($$result)}<main id="home" class="astro-XF56A5A3">
    <img src="/assets/images/bg.png" class="background astro-XF56A5A3" alt="background image" width="1920" height="1080">
	<div class="overlay astro-XF56A5A3"></div>
    ${renderComponent($$result, "HomeComponent", $$Home, { "class": "astro-XF56A5A3" })}
</main>`;
}, "E:/Pluto-Design/luminobyte/src/components/MainComponent.astro");

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Luminobyte - We Inspire other by games." }, { "default": ($$result2) => renderTemplate`
	${renderComponent($$result2, "Navbar", $$Navbar, {})}
	${renderComponent($$result2, "MainComponent", $$MainComponent, {})}
	${renderComponent($$result2, "GamesComponent", $$Games, {})}
	${renderComponent($$result2, "About", $$About, {})}
	${renderComponent($$result2, "MeetTheTeamComponent", $$MeetTheTeam, {})}
	${renderComponent($$result2, "JobListing", $$JobListing, {})}
	${renderComponent($$result2, "Footer", $$Footer, {})}
` })}`;
}, "E:/Pluto-Design/luminobyte/src/pages/index.astro");

const $$file = "E:/Pluto-Design/luminobyte/src/pages/index.astro";
const $$url = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _ };
