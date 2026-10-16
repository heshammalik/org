// DOM Element References
const modal = document.getElementById('infoModal');
const modalCode = document.getElementById('modalCode');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');

const imageLightbox = document.getElementById('imageLightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxTag = document.getElementById('lightboxTag');
const lightboxCaption = document.getElementById('lightboxCaption');

// Scroll Lock Helpers
function lockBodyScroll() {
    document.body.style.overflow = 'hidden';
}

function unlockBodyScroll() {
    document.body.style.overflow = '';
}

// Mobile Nav Toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    const btn = document.querySelector('.mobile-nav-btn');
    if (menu) {
        const isActive = menu.classList.toggle('active');
        if (btn) {
            btn.setAttribute('aria-expanded', isActive ? 'true' : 'false');
        }
    }
}

// Image Lightbox Functions
function openImageLightbox(src, tag, caption) {
    if (!imageLightbox || !lightboxImg || !lightboxTag || !lightboxCaption) return;
    
    lightboxImg.src = src;
    lightboxTag.innerHTML = tag;
    lightboxCaption.innerText = caption;
    imageLightbox.classList.add('active');
    lockBodyScroll();
}

function closeImageLightbox() {
    if (!imageLightbox) return;
    imageLightbox.classList.remove('active');
    unlockBodyScroll();
}

if (imageLightbox) {
    imageLightbox.addEventListener('click', (e) => {
        if (e.target === imageLightbox) closeImageLightbox();
    });
}

// Universal Text Modal Functions
function openModalByKey(key) {
    if (!modal || !modalCode || !modalTitle || !modalBody) return;
    
    const data = archiveData[key];
    if (data) {
        modalCode.innerHTML = data.code;
        modalTitle.innerText = data.title;
        modalBody.innerHTML = data.body;
        modal.classList.add('active');
        lockBodyScroll();
        
        // Focus close button for screen readers and keyboard users
        const closeBtn = modal.querySelector('.modal-close');
        if (closeBtn) closeBtn.focus();
    }
}

function closeModal() {
    if (!modal) return;
    modal.classList.remove('active');
    unlockBodyScroll();
}

if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}

// Backward Compatibility Helpers
function openPillar(key) { openModalByKey(key); }
function openTrajectory(key) { openModalByKey(key); }
function openInstitution(key) { openModalByKey(key); }

// Global Keydown Handler (Escape Key Listener & Accessibility Keyboard Controls)
document.addEventListener('keydown', (e) => {
    // Press 'Escape' to close active modals or lightboxes
    if (e.key === 'Escape') {
        if (modal && modal.classList.contains('active')) {
            closeModal();
        }
        if (imageLightbox && imageLightbox.classList.contains('active')) {
            closeImageLightbox();
        }
    }

    // Allow keyboard Enter / Space keys to trigger interactive elements with role="button"
    if ((e.key === 'Enter' || e.key === ' ') && document.activeElement) {
        const target = document.activeElement;
        if (target.getAttribute('role') === 'button' && target.hasAttribute('onclick')) {
            e.preventDefault();
            target.click();
        }
    }
});

// Master Registry for All Dynamic Modals
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

    // Spatial Chapters / Trajectories
    tmoci_essay: {
        code: "INQ-2026-06 &bull; CURATORIAL DISCOURSE",
        title: "The Architecture of Crisis: Mapping Global Energy Through Linguistic Archives",
        body: "<b>Published by The Museum of Contemporary Inquiry (TMOCI) — June 2026</b><br><br>In an era defined by rapid geopolitical shifts, institutional fragmentation, and digital saturation, how do intellectual architects articulate the underlying frequency of our times? This question sits at the center of Global Project Words, an ongoing data-visualization and neuro-aesthetic initiative that gathers single, spontaneous word contributions from figures across global networks of governance, science, and heritage. Rather than relying on traditional public statements or policy briefs, such archives operate on a premise of radical reduction: capturing the raw, unmediated linguistic reflex of those who navigate institutional power.<br><br>The structural scope of these evolving archives spans an unprecedented ecosystem of authority—capturing contributions from premier research pillars, cultural preservation benchmarks, and international advocacy bodies across North America, Europe, the Arctic, and the Global South. When these disparate fragments, ranging from administrative reflections to deeply philosophical terms, are gathered, they form a collective linguistic portrait of contemporary consciousness. Yet, collecting linguistic data is only the preliminary phase; the critical challenge lies in how such intangible energy signatures are translated into physical space.<br><br>Historically, conceptual practices have grappled with the materialization of language and systemic data. One thinks of On Kawara’s systematic logging of temporal existence, or conceptual frameworks that treated text not merely as a descriptor, but as an unyielding structural anchor. In contemporary spatial practice, this lineage is actively engaged by works such as those by Hesham Malik, whose large-scale abstract canvases transmutate linguistic data into heavy, textured layers of pigment. Rather than relying on commercial spectacle, such practices treat the donated word as a primary energy source—mapping the dialogue between global crisis and material endurance.<br><br>As these conceptual repositories accumulate, they transition from temporary exercises into permanent monuments of our historical moment—reminding us that beneath the machinery of global politics lies the simple, vibrating weight of a single human word."
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
    },
    retrospectives: {
        code: "CAREER MONOGRAPH &bull; THREE DECADES",
        title: "100+ Global Solo Retrospectives",
        body: "Over three decades, Hesham Malik’s solo exhibition trajectory has spanned premier cultural capitals across North America, Europe, the Middle East, and Asia—including Toronto, London, Athens, Prague, Brussels, Dubai, Goa, Oulu, and Poland. Rather than operating within regional gallery circuits, each retrospective is conceived as a sovereign spatial intervention."
    },
    collections: {
        code: "PROVENANCE REGISTER &bull; GLOBAL ARCHIVES",
        title: "Institutional & Sovereign Collections",
        body: "Hesham Malik’s oeuvre is anchored in sovereign, state, and private collections internationally. Bridging fine art with material science and systemic innovation, his monumental canvases and structural installations are preserved outside speculative commercial market mechanics."
    },
    literature: {
        code: "CRITICAL DISCOURSE &bull; HISTORICAL ARCHIVE",
        title: "3 Decades of Monographic Literature",
        body: "A comprehensive 30-year archive of curatorial essays, theoretical monographs, and scholarly reviews documents the evolution of Malik’s conceptual praxis."
    },
    voices_interconnection: {
        code: "VOICES OF THE LAND &bull; CURATORIAL METHODOLOGY I",
        title: "Relational Epistemology",
        body: "Relational Epistemology centers on the foundational principle that human knowledge cannot be isolated from the land, territory, or living community. By integrating terms like Ankosé ('everything is connected') from the National Gallery of Canada's Algonquin Knowledge Keepers, the archive demonstrates how visual art can mirror universal interconnectedness."
    },
    voices_social_capital: {
        code: "VOICES OF THE LAND &bull; CURATORIAL METHODOLOGY II",
        title: "Social Capital & Well-being",
        body: "Examining how indigenous languages define community infrastructure through care, responsibility, and mentorship. Featuring contributions like sâkihitowin ('love as foundational wellness') from Dr. Evelyn Steinhauer (Univ. of Alberta) and Sakorihonnienni ('mentor / teacher') from Prof. Frank Deer (Univ. of Manitoba)."
    },
    voices_stewardship: {
        code: "VOICES OF THE LAND &bull; CURATORIAL METHODOLOGY III",
        title: "Land Custodianship & Earth Strength",
        body: "Archiving environmental stewardship philosophy across international indigenous territories. Incorporating Dalabon Junggayi ('traditional custodian' via Prof. Claire Smith), Cherokee Ama ('water' via Dr. Jeff Corntassel), and Anishinaabemowin Mashkiki ('strength of the Earth' via Prof. Melissa K. Nelson)."
    },
    rooh_academic: {
        code: "ROOH-NAWAZ &bull; CURATORIAL METHODOLOGY I",
        title: "Epistemic Unsettledness & Exile",
        body: "Examining how concepts of transit, longing, and seeking—such as Bi-gharāri and Rahi—reframe exile and displacement into a dynamic state of continuous intellectual, spiritual, and artistic creation."
    },
    rooh_art: {
        code: "ROOH-NAWAZ &bull; CURATORIAL METHODOLOGY II",
        title: "Cultural Convergence & Ethos",
        body: "Archiving living Persianate virtues like Adab (ethical reverence) and untranslatable linguistic bridges like Jān as essential social infrastructure for cross-cultural solidarity and shared human dignity."
    },
    rooh_archive: {
        code: "ROOH-NAWAZ &bull; CURATORIAL METHODOLOGY III",
        title: "Spiritual & Historical Persistence",
        body: "Translating historical fortitude, poetic paradox, and non-dualistic oneness into monumental public canvases celebrating the enduring resilience of the global Persian community."
    },

    // Institutions & Roster Pills
    harvard: {
        code: "DONATED WORD ARCHIVE &bull; WORDS PROJECT",
        title: "Harvard University Network",
        body: "Over 100 single-word contributions have been donated across Harvard’s academic spectrum—including students, senior professors, department deans, and the Office of the President Emeritus. Donated terms serve as raw conceptual energy for monumental canvases, including: decency, amalgamation, disruption, xenophilia, cognition, ineptitude, genocide, transnational repression, cafuné, grief, enlightenment, warmth, nowheresville, spice/spices, concerned, satchitananda, together, unsure, hope, serendipity, beauty, rupture, superposition, restoration, serenity, complexity, dilemma, praiseworthiness, love, graft, think, metamorphosis, renovate, better, persisting, purpose, rigamarole, and many more."
    },
    oxbridge: {
        code: "DONATED WORD ARCHIVE &bull; WORDS PROJECT",
        title: "University of Cambridge & University of Oxford",
        body: "Bypassing formal academic boundaries, foundational word donations were contributed by leading faculties across both historic institutions. Professor David Lane (University of Cambridge) offered <b>'love'</b> as an indispensable grounding force, while Professor Kate Raworth (University of Oxford, author of Doughnut Economics) contributed <b>'play'</b> as the bedrock for systemic human creativity."
    },
    sorbonne: {
        code: "DONATED WORD ARCHIVE &bull; WORDS PROJECT",
        title: "Sorbonne University & IAE Paris-Sorbonne Network",
        body: "Contributions from academic leadership at Sorbonne University explore the intersection between organizational inquiry, spatial geometry, and urban proximity. Reflecting on how unconventional artistic methodologies disrupt standard institutional patterns, research leadership at Sorbonne examines the tension between structural order, human proximity, and the unexpected intellectual dialogue generated through global participatory archives."
    },
    art4hr: {
        code: "DONATED WORD ARCHIVE &bull; WORDS PROJECT",
        title: "Art for Human Rights (Paris)",
        body: "Donated by Bill Shipsey, Executive Director of Art for Human Rights (Paris):<br><br><b>'resist'</b><br><br>A direct invocation calling for active courage, moral engagement, and solidarity against apathy."
    },
    svalbard: {
        code: "DONATED WORD ARCHIVE &bull; WORDS PROJECT",
        title: "Svalbard Global Seed Vault (Norway)",
        body: "Carved into the solid rock of Plateau Mountain in Svalbard, Norway, the Seed Vault safeguards over one million crop samples under black-box conditions as a backup for world agriculture. A staff member contributed the donated word:<br><br><b>'photosynthesis'</b><br><br>—honoring the fundamental chemical wonder that sustains life on this planet."
    },
    goodall: {
        code: "DONATED WORD ARCHIVE &bull; WORDS PROJECT",
        title: "The Jane Goodall Institute",
        body: "Donated directly by Mary Lewis, Vice President & Assistant to Dr. Jane Goodall, DBE (UN Messenger of Peace and Founder of the Jane Goodall Institute & Roots & Shoots):<br><br><b>'hope'</b><br><br>Embodying Dr. Goodall's lifelong philosophy that active hope is the essential catalyst for environmental survival and global youth stewardship."
    },
    tate: {
        code: "DONATED WORD ARCHIVE &bull; WORDS PROJECT",
        title: "TATE Galleries (Dr. Maria Balshaw CBE)",
        body: "Donated by Dr. Maria Balshaw CBE, Director of the TATE art museums and galleries:<br><br><b>'conviviality'</b><br><br><i>\"A state of mind I think builds hope and positivity between friends and strangers alike. Much needed these days.\"</i>"
    },
    iaml: {
        code: "DONATED WORD ARCHIVE &bull; WORDS PROJECT",
        title: "International Arts + Mind Lab (Johns Hopkins Medicine)",
        body: "Donated by Susan Magsamen, Founder and Executive Director of the International Arts + Mind Lab (Pediatric Neurosurgery, Johns Hopkins University School of Medicine):<br><br><b>'joy'</b><br><br>Rooted in neuroaesthetics, celebrating how artistic engagement generates profound neurochemical flourish and human connection."
    },
    ludwig: {
        code: "DONATED WORD ARCHIVE &bull; WORDS PROJECT",
        title: "Ludwig Museum – Museum of Contemporary Art (Budapest)",
        body: "Donated by Dr. Julia Fabényi, Director of the Ludwig Museum of Contemporary Art in Budapest, Hungary:<br><br><b>'compulsory' & 'compliance'</b><br><br>Reflecting the tension between institutional mandates, societal compliance, and the liberating autonomy of contemporary fine art."
    },
    unicef: {
        code: "DONATING ARCHIVE &bull; LIFE OF A BOX",
        title: "UNICEF",
        body: "\"Global consumption and production trends deplete valuable natural resources and create toxic waste. Children are the least responsible for environmental degradation, yet they’ll bear the greatest burden of its impact. Decades of evidence shows that widespread behaviour change, such as recycling and using less plastic, often begins with children. That’s why UNICEF engages young people to promote responsible, climate-friendly consumption behaviours and to set an example for their communities.\""
    },
    gatech: {
        code: "DONATING ARCHIVE &bull; LIFE OF A BOX",
        title: "Georgia Institute of Technology (Georgia Tech, USA)",
        body: "\"We support any effort to keep our planet healthy and habitable to all people. Sustainability is very important in such efforts for Earth and its inhabitants. Because of this, we are proud to participate in the Life of a box initiative.\""
    },
    redcross: {
        code: "DONATING ARCHIVE &bull; LIFE OF A BOX",
        title: "Czech Red Cross (Director Mgr. Eva Bernatová)",
        body: "\"The Czech Red Cross is guided by the fundamental principles of the Red Cross and Red Crescent Movement, which are humanity, impartiality, independence, neutrality, unity, universality and voluntary service. We strive to focus on helping those who need help the most. The emphasis on sustainable behavior is essential for our organization. We were honored to contribute to Hesham’s sustainability initiative, Life of a box.\""
    },
    nobel: {
        code: "DONATING ARCHIVE &bull; LIFE OF A BOX",
        title: "Nobel Prize Museum (Sweden)",
        body: "\"The Nobel Prize Museum believes that the future is still open and ours to shape through critical thinking, creativity and persistence. The purpose of our climate and environmental efforts is to limit our negative impact in order to contribute to a lasting and sustainable development in our societies.\""
    },
    nypld: {
        code: "DONATING ARCHIVE &bull; LIFE OF A BOX",
        title: "The New York Public Library (USA)",
        body: "\"The New York Public Library opened its Battery Park City branch, an environmentally friendly library that provides a wide range of services for the community. The library was constructed with a focus on environmental sustainability and is the first GREEN Library in Manhattan.\""
    },
    denmark: {
        code: "DONATING ARCHIVE &bull; LIFE OF A BOX",
        title: "National Museum of Denmark",
        body: "\"At the National Museum of Denmark, green sustainability is intricately connected to social sustainability, which encompasses diversity, inclusivity, and justice. Consequently, the museum’s green strategy is closely aligned with its overarching strategy, characterized by an open, inclusive, and engaging approach to experiencing art. They have contributed the aforementioned used box in support of the global sustainability initiative 'Life of a Box'.\""
    },
    basel: {
        code: "DONATING ARCHIVE &bull; LIFE OF A BOX",
        title: "Museum of Basel (Switzerland)",
        body: "\"Sustainability is central to the values of the Museum of Basel, with sustainable principles integrated into its operations, educational programs, and artistic endeavors. The commitment to sustainability is deeply embedded in the Museum’s strategy, and the Sustainability team plays a pivotal role by initiating and coordinating various projects, such as 'Life of a Box'.\""
    },
    ukraine: {
        code: "DONATING ARCHIVE &bull; LIFE OF A BOX",
        title: "National Museum of the History of Ukraine",
        body: "\"The National museum of the history of Ukraine’s initiative aims at safeguarding and conserving cultural heritage are essential for ensuring the enduring sustainability of Ukraine’s cultural identity and its capacity to transmit its history to future generations. We believe the strength of sustainable development within society is intrinsically linked to the safeguarding of cultural beliefs, traditions, and heritage.\""
    },
    cotroceni: {
        code: "DONATING ARCHIVE &bull; LIFE OF A BOX",
        title: "Cotroceni National Museum (Romania)",
        body: "\"We at Cotroceni National Museum believe that sustainability is the key to a stable future. By minimizing paper/plastic waste and carbon emissions, utilizing fewer resources, and decreasing our environmental footprint, we strive to meet our objectives for a sustainable future. We Support various sustainability initiatives like Hesham’s 'Life of a Box' which is essential for preserving our planet for future generations.\""
    },
    toulouse: {
        code: "DONATING ARCHIVE &bull; LIFE OF A BOX",
        title: "des Musées et Monuments, Toulouse (France)",
        body: "\"At des Musées et Monuments in Toulouse, we endeavor to regard sustainability not only as an institutional responsibility but also as a personal commitment. The state in which we pass our planet to future generations is one of the most urgent challenges of our era. We aim for enduring and sustainable solutions that protect the environment and preserve resources. As a result, the 'Life of a Box' initiative, which integrates the idea of sustainability with art, struck a chord with us, and we are delighted to be involved in it.\""
    },
    germanlib: {
        code: "DONATING ARCHIVE &bull; LIFE OF A BOX",
        title: "German National Library (Frankfurt, Germany)",
        body: "\"We believe it is our social responsibility to protect our planet and safeguard its future. Our Earth has limited resources. Sustainable thinking and action and an environmentally conscious lifestyle can help us use them more mindfully.\""
    },
    amazon: {
        code: "DONATING ARCHIVE &bull; LIFE OF A BOX",
        title: "Amazon (United Kingdom)",
        body: "\"These unique artworks by Hesham Malik were created on Amazon delivery packaging. They include a cardboard box, a paper bag and a Philips egg cooker which was shipped directly to Hesham without any added delivery packaging at all – only a shipping label was applied to the manufacturer’s original box. Every day, Amazon ships millions of orders around the globe, working hard to make sure products reach customers safely and with the least amount of packaging necessary. More than 50% of European shipments now come in reduced, recyclable delivery packaging, such as a paper bag or cardboard envelope or – in the case of 1 billion shipments since 2019 – with no added packaging at all. This approach has helped Amazon avoid 4.2 million metric tons of packaging materials since 2015.\""
    },
    moa: {
        code: "DONATING ARCHIVE &bull; LIFE OF A BOX",
        title: "Museum of Anthropology (MOA) at UBC (Canada)",
        body: "\"The Museum of Anthropology (MOA) at the University of British Columbia is located on the traditional, ancestral and unceded territory of the xwməθkwəýəm (Musqueam) people. We are grateful to live and work on this land and we strive to adhere to our hosts’ standards to steward the earth for present and future generations. For many years, MOA has practiced reusing and repurposing materials for use in exhibitions, storage and loans. MOA is happy to contribute to the 'Life of a Box' sustainability initiative, demonstrating our values to reduce our environmental footprint by repurposing valuable materials and resources.\""
    },
    duszniki: {
        code: "DONATING ARCHIVE &bull; LIFE OF A BOX",
        title: "Museum of Papermaking in Duszniki-Zdrój (Poland)",
        body: "\"At the Museum of Papermaking in Duszniki-Zdrój, we believe that cultural heritage and environmental responsibility can go hand in hand. By minimizing waste, reducing resource consumption, and promoting sustainable technologies, we aim to lower our environmental footprint. One of our innovative initiatives is the production of elephant paper, made from 50% recycled paper and 50% elephant dung – a symbol of ecological thinking and creative recycling. We support sustainability efforts that combine tradition with a modern sense of responsibility for the future of our planet.\""
    },
    ngc: {
        code: "DONATED WORD ARCHIVE &bull; VOICES OF THE LAND",
        title: "National Gallery of Canada",
        body: "\"We would like to propose the word 'Ankosé'. It is an Anishinaabemowin word that means 'everything is connected' – emerged through conversations with Anishinaabeg Algonquin Knowledge Keepers and Elders to guide the entire Gallery’s vision for what we do. Inspired by this territory, where many groups have traded, settled and built relationships for thousands of years, Ankosé frames our role in building and nurturing these connections.\""
    },
    flinders: {
        code: "DONATED WORD ARCHIVE &bull; VOICES OF THE LAND",
        title: "Flinders University, Australia (Prof. Claire Smith)",
        body: "\"The word we have chosen is the Dalabon word, 'Junggayi'. It means traditional custodian. It is part of a system of land ownership in which all land is owned by Traditional Owners and managed by Junggayi (Traditional Custodians).\""
    },
    ualberta: {
        code: "DONATED WORD ARCHIVE &bull; VOICES OF THE LAND",
        title: "University of Alberta (Dr. Evelyn Steinhauer)",
        body: "\"The nêhiyawêwin (Cree) word I would like to offer is 'sâkihitowin' — love. I chose sâkihitowin because, for me, love must come first. It is foundational to how we understand wellness, relationship, community, and our responsibilities to one another. Healthy communities require healthy people, and wellness is not only physical. It is emotional, spiritual, mental, relational, and connected to our sense of belonging. Love creates the conditions in which people can feel safe, valued, cared for, and connected.\""
    },
    umanitoba_deer: {
        code: "DONATED WORD ARCHIVE &bull; VOICES OF THE LAND",
        title: "University of Manitoba (Prof. Frank Deer)",
        body: "\"The word I offer to you is 'Sakorihonnienni' (sa-go-ri-hon-nien-ni) from the Kanien'kehá:ka (Mohawk) language. This word may be understood to mean 'mentor' or 'one who teaches'. In Kaionni 28 of the Kaianere’kó:wa (Great Law of Peace), this word is used to describe the role of new tribal chiefs.\""
    },
    cherokee: {
        code: "DONATED WORD ARCHIVE &bull; VOICES OF THE LAND",
        title: "Cherokee Nation & University of Victoria (Dr. Jeff Corntassel)",
        body: "\"The word I offer is 'Ama' (Ꭰ) — the Cherokee word for water. My research and teaching focus on Everyday Acts of Resurgence, Indigenous internationalism, climate justice, and the protection of homelands.\""
    },
    swarthmore: {
        code: "DONATED WORD ARCHIVE &bull; VOICES OF THE LAND",
        title: "Swarthmore College & National Geographic (Dr. K. David Harrison)",
        body: "\"I am happy to contribute a favorite phrase from the Tuvan language and culture of Siberia: 'угаанга төнчү чок' — which translates to 'mind has no end'.\""
    },
    umanitoba_kulch: {
        code: "DONATED WORD ARCHIVE &bull; VOICES OF THE LAND",
        title: "University of Manitoba (Prof. Peter Kulchyski)",
        body: "\"Inninewak word: 'Pimatisiwin' (the good life). Inuktitut words: 'Auyunarmut' (it can’t be helped) and 'Taima' (enough, peace).\""
    },
    asu: {
        code: "DONATED WORD ARCHIVE &bull; VOICES OF THE LAND",
        title: "Arizona State University (Prof. Melissa K. Nelson)",
        body: "\"In Anishinaabemowin, I would offer 'Mashkiki' — interpreted as 'medicine', but literally meaning 'strength of the Earth'. In English, I offer 'Renewal'.\""
    },
    pazargadi: {
        code: "CURATORIAL SYNTHESIS &bull; ROOH-NAWAZ CODEX",
        title: "Rahi (راهی)",
        body: "<b>Donated Concept:</b> Rahi (راهی) — Wayfarer / Transit<br><br><b>Curatorial Synthesis:</b> An academic exploration of transit, movement, and the enduring human journey through narrative self-discovery.<br><br><i>Institutional research affiliation (Scholar of Literature, Nevada State) referenced strictly for biographical identification purposes.</i>"
    },
    berberian: {
        code: "CURATORIAL SYNTHESIS &bull; ROOH-NAWAZ CODEX",
        title: "Peyvand / Permani (پیوند)",
        body: "<b>Donated Concept:</b> Peyvand / Permani (پیوند / ارمنی) — The Intimate Bond<br><br><b>Curatorial Synthesis:</b> Mapping the deep historical, literary, and socio-cultural convergence linking Armenian and Iranian identities across centuries of shared geography.<br><br><i>Institutional research affiliation (Chair in Armenian Studies, UC Irvine) referenced strictly for biographical identification purposes.</i>"
    },
    kia: {
        code: "CURATORIAL SYNTHESIS &bull; ROOH-NAWAZ CODEX",
        title: "Adab (ادب)",
        body: "<b>Donated Concept:</b> Adab (ادب) — Ethical Reverence & Deportment<br><br><b>Curatorial Synthesis:</b> A foundational Persianate ethos governing ethics, artistic sensitivity, and human connection across generational boundaries.<br><br><i>Institutional research affiliation (Middle Eastern & Islamic Studies, Columbia University) referenced strictly for biographical identification purposes.</i>"
    },
    kian: {
        code: "CURATORIAL SYNTHESIS &bull; ROOH-NAWAZ CODEX",
        title: "Language as a Passage",
        body: "<b>Donated Concept:</b> Language as a Passage (زبان به مثابه گذرگاه)<br><br><b>Curatorial Synthesis:</b> \"May language become a bridge, never a wall—a passage through the gardens of our differences.\" A poetic assertion that community is built through patient, open-hearted hospitality.<br><br><i>Institutional research affiliation (Persian & Cultural Studies, UC Irvine) referenced strictly for biographical identification purposes.</i>"
    },
    harouni: {
        code: "CURATORIAL SYNTHESIS &bull; ROOH-NAWAZ CODEX",
        title: "Bi-gharāri (بیقراری)",
        body: "<b>Donated Concept:</b> Bi-gharāri (بیقراری) — Dynamic Longing & Unsettledness<br><br><b>Curatorial Synthesis:</b> A deliberate refusal to remain static in one’s ideas, identities, or certainties, capturing the tension between seeking peace and accepting continuous intellectual growth.<br><br><i>Institutional research affiliation (Critical Pedagogy & Education, Harvard University) referenced strictly for biographical identification purposes.</i>"
    },
    grigor: {
        code: "CURATORIAL SYNTHESIS &bull; ROOH-NAWAZ CODEX",
        title: "Jān / Jan (جان)",
        body: "<b>Donated Concept:</b> Jān / Jan (Ջان / جان) — Shared Soul & Affinity<br><br><b>Curatorial Synthesis:</b> An untranslatable linguistic bridge spanning Persian, Armenian, and South Asian heritage representing the embodied spirit of empathy and shared cultural memory.<br><br><i>Institutional research affiliation (Architectural History, UC Davis) referenced strictly for biographical identification purposes.</i>"
    },
    daryaee: {
        code: "CURATORIAL SYNTHESIS &bull; ROOH-NAWAZ CODEX",
        title: "Courage (شجاعت)",
        body: "<b>Donated Concept:</b> Courage (شجاعت) — Historical Fortitude<br><br><b>Curatorial Synthesis:</b> The fortitude required to safeguard cultural identity across millennia of geopolitical disruption, exile, and historical transformation.<br><br><i>Institutional research affiliation (Jordan Center for Persian Studies, UC Irvine) referenced strictly for biographical identification purposes.</i>"
    },
    hodgkin: {
        code: "CURATORIAL SYNTHESIS &bull; ROOH-NAWAZ CODEX",
        title: "Bedil Paradox",
        body: "<b>Donated Verse:</b> همان پلنگ به دریایم و نهنگ به صحرا (Bedil of Delhi)<br><br><b>Curatorial Synthesis:</b> A poetic paradox of displacement and adaptability: \"The leopard in the sea, the whale in the desert.\" Illustrates the boundless capacity to navigate unfamiliar landscapes.<br><br><i>Institutional research affiliation (Comparative Literature, Yale University) referenced strictly for biographical identification purposes.</i>"
    },
    siamdoust: {
        code: "CURATORIAL SYNTHESIS &bull; ROOH-NAWAZ CODEX",
        title: "Sekanjebin (سکنجبین)",
        body: "<b>Donated Concept:</b> Sekanjebin (سکنجبین) — Traditional Elixir<br><br><b>Curatorial Synthesis:</b> A sensory touchstone of Persian cultural life, symbolizing physical nourishment, nostalgia, and the enduring sweetness of home.<br><br><i>Institutional research affiliation (Cultural Media & Middle Eastern Studies, UT Austin) referenced strictly for biographical identification purposes.</i>"
    },
    babaie: {
        code: "CURATORIAL SYNTHESIS &bull; ROOH-NAWAZ CODEX",
        title: "Oneness (یگانگی)",
        body: "<b>Donated Concept:</b> Oneness (یگانگی) — Absolute Convergence<br><br><b>Curatorial Synthesis:</b> The sacred aesthetic convergence of form, spirit, and spatial geometry, reflecting non-dualistic harmony central to Islamic and Persian visual traditions.<br><br><i>Institutional research affiliation (Courtauld Institute of Art, London) referenced strictly for biographical identification purposes.</i>"
    },
    tabarraee: {
        code: "CURATORIAL SYNTHESIS &bull; ROOH-NAWAZ CODEX",
        title: "Endlessness",
        body: "<b>Donated Concept:</b> همه‌‌چیز تمام می‌شود / تو تمام نمی‌‌شوی — Endlessness<br><br><b>Curatorial Synthesis:</b> A double-entendre exploring impermanence and infinity: \"Everything comes to an end; You won't.\" Reflects the eternal nature of human connection against temporal decay.<br><br><i>Institutional research affiliation (Persian Studies, UT Austin) referenced strictly for biographical identification purposes.</i>"
    }
};
