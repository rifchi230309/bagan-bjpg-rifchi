
const descriptions = {
    mama: {
    title: "はは — Haha (Mama)",
    japanese:
        "はははやさしいです。すきないろはピンクです。" +
        "あおとしろのシャツをきて、くろいヒジャブをかぶっています。" +
        "はははきれいです。",
    romaji:
        "Haha wa yasashii desu. Suki na iro wa pinku desu. " +
        "Ao to shiro no shatsu o kite, kuroi hijabu o kabutte imasu. " +
        "Haha wa kirei desu.",
    meaning:
        "Sifat Mama baik hati. Warna favoritnya pink. " +
        "Mama memakai kemeja biru dan putih serta jilbab hitam. " +
        "Kesan: Mama cantik."
},

ayah: {
    title: "ちち — Chichi (Papa)",
    japanese:
        "ちちはきびしいです。すきないろはネイビーです。" +
        "くろいジャケットをきて、ニットぼうをかぶり、めがねをかけています。" +
        "ちちはハンサムです。",
    romaji:
        "Chichi wa kibishii desu. Suki na iro wa neibī desu. " +
        "Kuroi jaketto o kite, nitto bō o kaburi, megane o kakete imasu. " +
        "Chichi wa hansamu desu.",
    meaning:
        "Sifat Papa tegas. Warna favoritnya biru tua. " +
        "Papa memakai jaket hitam, kupluk, dan kacamata. " +
        "Kesan: Papa ganteng."
},

    saya: {
        title: "わたし — Watashi (Saya)",
        japanese:
            "わたしはむくちです。すきないろはみずいろです。" +
            "みどりのティーシャツをきて、ネックレスをしています。" +
            "わたしはかっこいいです。",
        romaji:
            "Watashi wa mukuchi desu. Suki na iro wa mizuiro desu. " +
            "Midori no tīshatsu o kite, nekkuresu o shite imasu. " +
            "Watashi wa kakkoii desu.",
        meaning:
            "Sifat saya pendiam. Warna favorit saya biru muda. " +
            "Saya memakai kaos hijau dan kalung. " +
            "Kesan: Saya keren."
    },

    adik: {
        title: "いもうと — Imōto (Adik Perempuan)",
        japanese:
            "いもうとはむくちです。すきないろはピンクです。" +
            "みどりのふくをきて、みどりのヒジャブをかぶっています。" +
            "いもうとはかわいいです。",
        romaji:
            "Imōto wa mukuchi desu. Suki na iro wa pinku desu. " +
            "Midori no fuku o kite, midori no hijabu o kabutte imasu. " +
            "Imōto wa kawaii desu.",
        meaning:
            "Sifat adik perempuan saya pendiam. Warna favoritnya pink. " +
            "Adik memakai baju hijau dan jilbab hijau. " +
            "Kesan: Adik lucu."
    }
};


const familyMembers = document.querySelectorAll(".person[data-member]");
const panel = document.getElementById("description-panel");
const title = document.getElementById("description-title");
const japanese = document.getElementById("description-japanese");
const romaji = document.getElementById("description-romaji");
const meaning = document.getElementById("description-meaning");
const closeButton = document.getElementById("close-description");

function showDescription(member) {
    const data = descriptions[member];

    if (!data) return;

    title.textContent = data.title;
    japanese.textContent = data.japanese;
    romaji.textContent = data.romaji;
    meaning.textContent = data.meaning;

    panel.hidden = false;

    familyMembers.forEach((card) => {
        card.setAttribute(
            "aria-expanded",
            card.dataset.member === member ? "true" : "false"
        );
    });

    panel.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });
}

familyMembers.forEach((card) => {
    card.addEventListener("click", () => {
        showDescription(card.dataset.member);
    });

    // Agar kartu juga bisa dipilih dengan keyboard
    card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            showDescription(card.dataset.member);
        }
    });
});

closeButton.addEventListener("click", () => {
    panel.hidden = true;

    familyMembers.forEach((card) => {
        card.setAttribute("aria-expanded", "false");
    });
});