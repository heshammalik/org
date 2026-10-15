const modal = document.getElementById('infoModal');
const modalCode = document.getElementById('modalCode');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');

const imageLightbox = document.getElementById('imageLightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxTag = document.getElementById('lightboxTag');
const lightboxCaption = document.getElementById('lightboxCaption');

// Mobile Nav Toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('active');
}

function openImageLightbox(src, tag, caption) {
    lightboxImg.src = src;
    lightboxTag.innerHTML = tag;
    lightboxCaption.innerText = caption;
    imageLightbox.classList.add('active');
}

function closeImageLightbox() {
    imageLightbox.classList.remove('active');
}

imageLightbox.addEventListener('click', (e) => {
    if (e.target === imageLightbox) closeImageLightbox();
});

// Master Registry for Dynamic Modals
const archiveData = {
    // Pillars
    words: {
        code: "PILLAR I &bull; GLOBAL ARCHIVE",
        title: "Words Project",
        body: "Global Project Words has gathered thousands of single, spontaneous word contributions from world leaders, scientists, environmentalists, and cultural figures across global networks of governance, science, and heritage. These donated words serve as raw linguistic energy, translated into large-scale abstract canvases that map the dialogue between contemporary global crisis and material endurance."
    },
    box: {
        code: "PILLAR II &bull; GLOBAL SUSTAINABILITY INITIATIVE",
        title: "Life of a Box",
        body: "A monumental sustainability endeavor that turns used industrial cardboard packaging into structural high-art sculptures. Supported by environmental ministries and participating institutions worldwide—including the Nobel Prize Museum, National Museum of Denmark, Natural History Museum Zurich, Stockholm Resilience Centre, UNICEF, Red Cross, and Amazon UK—Life of a Box challenges market externalities by proving that industrial waste holds profound cultural and aesthetic longevity."
    },
    voices: {
        code: "PILLAR III &bull; SACRED INDIGENOUS KNOWLEDGE",
        title: "Voices of the Land",
        body: "A reverent collaboration with indigenous scholars, elders, and global heritage institutions (National Gallery of Canada, Swarthmore, University of Alberta, University of Manitoba). The archive preserves concepts such as Ojibwemowin 'Ankosé' (everything is connected), Cree 'sâkihitowin' (love as foundational wellness), and Cherokee 'Ama' (water), elevating living indigenous languages into permanent visual monuments."
    },
    rooh: {
        code: "PILLAR IV &bull; HUMAN RESILIENCE",
        title: "روح‌‌نواز (Rooh-Nawaz)",
        body: "An extensive visual testimonial honoring the global Persian community. Developed in dialogue with leading scholars from Harvard, Columbia, Yale, Uppsala, and Göttingen, Rooh-Nawaz explores central concepts like 'Adab' (ethical reverence), 'Bi-gharāri' (the refusal to remain spiritually or intellectually stagnant), and 'Zabur-e Haqiqat' (Psalms of Truth), translating displacement and resilience into unified visual monuments."
    },

    // Refactored Sorbonne Entry (Professional & Narrative)
    sorbonne: {
        code: "DONATED WORD ARCHIVE &bull; WORDS PROJECT",
        title: "Sorbonne University & IAE Paris-Sorbonne Network",
        body: "Contributions from academic leadership at Sorbonne University explore the intersection between organizational inquiry, spatial geometry, and urban proximity. Reflecting on how unconventional artistic methodologies disrupt standard institutional patterns, research leadership at Sorbonne examines the tension between structural order, human proximity, and the unexpected intellectual dialogue generated through global participatory archives."
    },

    // Institutional Roster & Trajectories
    harvard: {
        code: "DONATED WORD ARCHIVE &bull; WORDS PROJECT",
        title: "Harvard University Network",
        body: "Over 100 single-word contributions have been donated across Harvard’s academic spectrum—including students, senior professors, department deans, and the Office of the President Emeritus. Donated terms serve as raw conceptual energy for monumental canvases."
    },
    oxbridge: {
        code: "DONATED WORD ARCHIVE &bull; WORDS PROJECT",
        title: "University of Cambridge & University of Oxford",
        body: "Bypassing formal academic boundaries, foundational word donations were contributed by leading faculties across both historic institutions. Professor David Lane (University of Cambridge) offered 'love' as an indispensable grounding force, while Professor Kate Raworth (University of Oxford) contributed 'play' as the bedrock for systemic human creativity."
    },
    art4hr: {
        code: "DONATED WORD ARCHIVE &bull; WORDS PROJECT",
        title: "Art for Human Rights (Paris)",
        body: "Donated by Bill Shipsey, Executive Director of Art for Human Rights (Paris): 'resist' — A direct invocation calling for active courage, moral engagement, and solidarity against apathy."
    },
    svalbard: {
        code: "DONATED WORD ARCHIVE &bull; WORDS PROJECT",
        title: "Svalbard Global Seed Vault (Norway)",
        body: "Carved into the solid rock of Plateau Mountain in Svalbard, Norway, the Seed Vault safeguards over one million crop samples. A staff member contributed 'photosynthesis'—honoring the fundamental chemical wonder that sustains life on this planet."
    },
    goodall: {
        code: "DONATED WORD ARCHIVE &bull; WORDS PROJECT",
        title: "The Jane Goodall Institute",
        body: "Donated directly by Mary Lewis, Vice President & Assistant to Dr. Jane Goodall, DBE: 'hope' — Embodying Dr. Goodall's lifelong philosophy that active hope is the essential catalyst for environmental survival."
    },
    tate: {
        code: "DONATED WORD ARCHIVE &bull; WORDS PROJECT",
        title: "TATE Galleries (Dr. Maria Balshaw CBE)",
        body: "Donated by Dr. Maria Balshaw CBE, Director of the TATE art museums and galleries: 'conviviality' — 'A state of mind I think builds hope and positivity between friends and strangers alike.'"
    },
    iaml: {
        code: "DONATED WORD ARCHIVE &bull; WORDS PROJECT",
        title: "International Arts + Mind Lab (Johns Hopkins Medicine)",
        body: "Donated by Susan Magsamen, Founder and Executive Director of the International Arts + Mind Lab: 'joy' — Rooted in neuroaesthetics, celebrating how artistic engagement generates profound neurochemical flourish."
    },
    ludwig: {
        code: "DONATED WORD ARCHIVE &bull; WORDS PROJECT",
        title: "Ludwig Museum – Museum of Contemporary Art (Budapest)",
        body: "Donated by Dr. Julia Fabényi, Director of the Ludwig Museum: 'compulsory' & 'compliance' — Reflecting the tension between institutional mandates and the liberating autonomy of contemporary fine art."
    },

    // Additional Essays & Monographs
    tmoci_essay: {
        code: "INQ-2026-06 &bull; CURATORIAL DISCOURSE",
        title: "The Architecture of Crisis: Mapping Global Energy Through Linguistic Archives",
        body: "<b>Published by The Museum of Contemporary Inquiry (TMOCI) — June 2026</b><br><br>In an era defined by rapid geopolitical shifts, institutional fragmentation, and digital saturation, how do intellectual architects articulate the underlying frequency of our times? This question sits at the center of Global Project Words..."
    },
    words_codex: {
        code: "WORDS &bull; CURATORIAL METHODOLOGY I",
        title: "Linguistic DNA & Global Energy",
        body: "Extracting singular word donations from diverse cultures to map universal emotional and philosophical responses to modern planetary existence."
    },
    words_participatory: {
        code: "WORDS &bull; CURATORIAL METHODOLOGY II",
        title: "Participatory Architecture",
        body: "Bypassing traditional art world gatekeeping by allowing global scholars, leaders, and communities to directly author the conceptual foundation of the canvas."
    },
    words_monumental: {
        code: "WORDS &bull; CURATORIAL METHODOLOGY III",
        title: "Monumental Preservation",
        body: "Translating ephemeral text contributions into heavy, multi-layered pigment installations preserved for future cultural and historical archives."
    }
};

function openModalByKey(key) {
    const data = archiveData[key];
    if (data) {
        modalCode.innerHTML = data.code;
        modalTitle.innerText = data.title;
        modalBody.innerHTML = data.body;
        modal.classList.add('active');
    }
}

function closeModal() { 
    modal.classList.remove('active'); 
}

modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});
