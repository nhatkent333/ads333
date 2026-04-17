/**
 * TUDUY.COM - NOUN PHRASE LESSON SCRIPTS
 * Chứa logic render và state cho toàn bộ 4 Modules
 */

// ==========================================
// MODULE 1: NỀN TẢNG CƠ BẢN VỀ CỤM DANH TỪ
// ==========================================
(function() {
    // Dữ liệu Private cho Module 1 (Không bị trùng lặp với các Module khác)
    const LESSON_DATA = {
        highlight: [
            {
                sentence: "The small grey mouse ran quickly into the hole.",
                words: ["The", "small", "grey", "mouse", "ran", "quickly", "into", "the", "hole."],
                correctIndices: [0, 1, 2, 3], 
                explanation: "Cụm danh từ bắt đầu bằng mạo từ 'The', các tính từ 'small', 'grey' và kết thúc ở danh từ chính 'mouse'."
            },
            {
                sentence: "I saw an enormous hairy spider in the bathroom.",
                words: ["I", "saw", "an", "enormous", "hairy", "spider", "in", "the", "bathroom."],
                correctIndices: [2, 3, 4, 5], 
                explanation: "Mạo từ 'an' + tính từ 'enormous', 'hairy' + danh từ chính 'spider'."
            },
            {
                sentence: "He is wearing a red striped shirt today.",
                words: ["He", "is", "wearing", "a", "red", "striped", "shirt", "today."],
                correctIndices: [3, 4, 5, 6], 
                explanation: "Mạo từ 'a' + tính từ 'red', 'striped' + danh từ chính 'shirt'."
            }
        ],
        translate: [
            {
                phrase: "a beautiful old wooden dining table",
                options: [
                    "một bàn ăn bằng gỗ cũ kỹ tuyệt đẹp",
                    "một cái bàn tuyệt đẹp cũ bằng gỗ ăn",
                    "một cái bàn ăn bằng gỗ cũ kỹ tuyệt đẹp"
                ],
                answer: 2,
                explanation: "Dịch ngược từ danh từ chính 'dining table' (bàn ăn), rồi đến 'wooden' (bằng gỗ), 'old' (cũ), và 'beautiful' (tuyệt đẹp)."
            },
            {
                phrase: "several important financial documents",
                options: [
                    "một vài tài liệu tài chính quan trọng",
                    "một vài quan trọng tài chính tài liệu",
                    "tài liệu tài chính quan trọng một vài"
                ],
                answer: 0,
                explanation: "Dịch ngược: Danh từ chính 'documents' (tài liệu), 'financial' (tài chính), 'important' (quan trọng)."
            }
        ],
        sandwich: [
            {
                hints: ["Cái chuông (bell)", "Cái cửa (door)", "To, gây khó chịu (loud, annoying)", "Ở phía trên (above)"],
                words: ["above", "bell", "loud", "the", "The", "annoying", "door", "table", "silent"],
                correctSequence: ["The", "loud", "annoying", "bell", "above", "the", "door"],
                targetTranslation: "Cái chuông kêu to khó chịu ở phía trên cánh cửa."
            },
            {
                hints: ["Cô gái (girl)", "Mái tóc đen dài (long black hair)", "Đứng ở đằng kia (standing over there)"],
                words: ["The", "girl", "long", "with", "black", "hair", "standing", "over", "there", "short"],
                correctSequence: ["The", "girl", "with", "long", "black", "hair", "standing", "over", "there"],
                targetTranslation: "Cô gái có mái tóc đen dài đang đứng ở đằng kia."
            }
        ]
    };

    const ICONS = {
        correct: `<svg style="color: #16a34a; margin-top: 0.25rem; flex-shrink: 0;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>`,
        wrong: `<svg style="color: #ef4444; margin-top: 0.25rem; flex-shrink: 0;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>`
    };

    // Public Object cho Module 1 - Gắn vào Window để gọi từ các inline events
    window.Tuduy_NPM1 = {
        containerId: '',
        state: {
            currentSection: 'intro',
            hl_currentQ: 0, hl_selected: [], hl_checked: false,
            tr_currentQ: 0, tr_selected: null, tr_checked: false,
            sw_currentQ: 0, sw_available: [], sw_selected: [], sw_checked: false
        },

        init(containerId) {
            this.containerId = containerId;
            this.initSandwichTask();
            this.render();
        },

        goTo(section) {
            this.state.currentSection = section;
            window.scrollTo(0, 0);
            this.render();
        },

        // --- Highlight Logic ---
        hl_toggle(index) {
            if (this.state.hl_checked) return;
            const idx = this.state.hl_selected.indexOf(index);
            if (idx > -1) this.state.hl_selected.splice(idx, 1);
            else this.state.hl_selected.push(index);
            this.render();
        },
        hl_check() { this.state.hl_checked = true; this.render(); },
        hl_retry() { this.state.hl_selected = []; this.state.hl_checked = false; this.render(); },
        hl_next() {
            if (this.state.hl_currentQ < LESSON_DATA.highlight.length - 1) {
                this.state.hl_currentQ++; this.state.hl_selected = []; this.state.hl_checked = false; this.render();
            } else { this.goTo('translate'); }
        },
        isHighlightCorrect() {
            const q = LESSON_DATA.highlight[this.state.hl_currentQ];
            if (this.state.hl_selected.length !== q.correctIndices.length) return false;
            const sortedSelected = [...this.state.hl_selected].sort();
            const sortedCorrect = [...q.correctIndices].sort();
            return sortedSelected.every((val, index) => val === sortedCorrect[index]);
        },

        // --- Translate Logic ---
        tr_select(index) {
            if (this.state.tr_checked) return;
            this.state.tr_selected = index;
            this.render();
        },
        tr_check() { this.state.tr_checked = true; this.render(); },
        tr_next() {
            if (this.state.tr_currentQ < LESSON_DATA.translate.length - 1) {
                this.state.tr_currentQ++; this.state.tr_selected = null; this.state.tr_checked = false; this.render();
            } else { this.goTo('sandwich'); }
        },

        // --- Sandwich Logic ---
        initSandwichTask() {
            const task = LESSON_DATA.sandwich[this.state.sw_currentQ];
            this.state.sw_available = [...task.words].sort(() => Math.random() - 0.5);
            this.state.sw_selected = [];
            this.state.sw_checked = false;
        },
        sw_select(word, index) {
            if (this.state.sw_checked) return;
            this.state.sw_available.splice(index, 1);
            this.state.sw_selected.push(word);
            this.render();
        },
        sw_deselect(word, index) {
            if (this.state.sw_checked) return;
            this.state.sw_selected.splice(index, 1);
            this.state.sw_available.push(word);
            this.render();
        },
        sw_check() { this.state.sw_checked = true; this.render(); },
        sw_retry() { this.initSandwichTask(); this.render(); },
        sw_next() {
            if (this.state.sw_currentQ < LESSON_DATA.sandwich.length - 1) {
                this.state.sw_currentQ++; this.initSandwichTask(); this.render();
            } else { this.goTo('summary'); }
        },
        isSandwichCorrect() {
            const task = LESSON_DATA.sandwich[this.state.sw_currentQ];
            return this.state.sw_selected.join(" ") === task.correctSequence.join(" ");
        },

        resetAll() {
            this.state = {
                currentSection: 'intro',
                hl_currentQ: 0, hl_selected: [], hl_checked: false,
                tr_currentQ: 0, tr_selected: null, tr_checked: false,
                sw_currentQ: 0, sw_available: [], sw_selected: [], sw_checked: false
            };
            this.initSandwichTask();
            window.scrollTo(0, 0);
            this.render();
        },

        // ==========================================
        // RENDERERS (HTML với Inline CSS)
        // ==========================================
        
        renderHeader() {
            return `
                <header style="background-color: #2563eb; color: #ffffff; padding: 1.5rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                    <div style="max-width: 56rem; margin: 0 auto; display: flex; align-items: center; gap: 1rem;">
                        <i data-lucide="book-open" style="width: 2rem; height: 2rem;"></i>
                        <div>
                            <h1 style="font-size: 1.5rem; font-weight: bold; margin: 0;">Làm Chủ Cụm Danh Từ (Noun Phrase)</h1>
                            <p style="color: #dbeafe; margin: 0.25rem 0 0 0;">Module 1: Nền tảng cơ bản</p>
                        </div>
                    </div>
                </header>
            `;
        },

        renderIntro() {
            return `
                <section style="background-color: #ffffff; border-radius: 1rem; box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05); padding: 2rem; text-align: center; border: 1px solid #f1f5f9; animation: fadeIn 0.4s ease-out forwards;">
                    <div style="width: 5rem; height: 5rem; background-color: #dbeafe; color: #2563eb; border-radius: 9999px; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem;">
                        <i data-lucide="target" style="width: 2.5rem; height: 2.5rem;"></i>
                    </div>
                    <h2 style="font-size: 1.875rem; font-weight: bold; margin: 0 0 1rem 0; color: #1e293b;">Chào mừng đến với Module 1</h2>
                    <p style="font-size: 1.125rem; color: #475569; margin: 0 auto 2rem auto; max-width: 42rem; line-height: 1.6;">
                        Ở bài học này, chúng ta sẽ xây dựng nền tảng vững chắc nhất về <strong style="color: #1e293b;">Cụm Danh Từ (Basic Noun Phrase)</strong>. 
                        Bạn sẽ học cách cấu tạo, cách xác định danh từ trung tâm và luyện phản xạ dịch ngược - kỹ năng cực kỳ quan trọng trong Tiếng Anh.
                    </p>
                    
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin-bottom: 2.5rem; text-align: left;">
                        <div style="background-color: #f8fafc; padding: 1.25rem; border-radius: 0.75rem; border: 1px solid #f1f5f9;">
                            <div style="display: flex; align-items: center; gap: 0.75rem; font-weight: 600; color: #1d4ed8; margin-bottom: 0.5rem;">
                                <i data-lucide="book-open" style="width: 1.25rem; height: 1.25rem;"></i> 20% Lý thuyết
                            </div>
                            <p style="font-size: 0.875rem; color: #475569; margin: 0;">Nắm vững khái niệm, cấu trúc cơ bản và quy tắc dịch ngược.</p>
                        </div>
                        <div style="background-color: #f8fafc; padding: 1.25rem; border-radius: 0.75rem; border: 1px solid #f1f5f9;">
                            <div style="display: flex; align-items: center; gap: 0.75rem; font-weight: 600; color: #15803d; margin-bottom: 0.5rem;">
                                <i data-lucide="eye" style="width: 1.25rem; height: 1.25rem;"></i> 60% Đọc hiểu
                            </div>
                            <p style="font-size: 0.875rem; color: #475569; margin: 0;">Luyện mắt quét nhanh cụm danh từ và bài tập chọn đáp án dịch đúng.</p>
                        </div>
                        <div style="background-color: #f8fafc; padding: 1.25rem; border-radius: 0.75rem; border: 1px solid #f1f5f9;">
                            <div style="display: flex; align-items: center; gap: 0.75rem; font-weight: 600; color: #7e22ce; margin-bottom: 0.5rem;">
                                <i data-lucide="pen-tool" style="width: 1.25rem; height: 1.25rem;"></i> 20% Ứng dụng
                            </div>
                            <p style="font-size: 0.875rem; color: #475569; margin: 0;">Trò chơi "Xếp Sandwich" - tự tay lắp ráp các cụm danh từ dài.</p>
                        </div>
                    </div>

                    <button onclick="window.Tuduy_NPM1.goTo('theory')" 
                            onmouseover="this.style.backgroundColor='#1d4ed8'; this.style.transform='scale(1.05)';" 
                            onmouseout="this.style.backgroundColor='#2563eb'; this.style.transform='scale(1)';" 
                            style="background-color: #2563eb; color: #ffffff; font-weight: 600; padding: 0.75rem 2rem; border-radius: 9999px; display: inline-flex; align-items: center; gap: 0.5rem; cursor: pointer; transition: all 0.2s; border: none; font-size: 1rem;">
                        Bắt đầu bài học <i data-lucide="play" style="width: 1.125rem; height: 1.125rem;"></i>
                    </button>
                </section>
            `;
        },

        renderTheory() {
            return `
                <section style="background-color: #ffffff; border-radius: 1rem; box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05); padding: 2rem; border: 1px solid #f1f5f9; animation: fadeIn 0.4s ease-out forwards;">
                    <div style="display: inline-block; background-color: #dbeafe; color: #1e40af; font-weight: 600; padding: 0.25rem 1rem; border-radius: 9999px; font-size: 0.875rem; margin-bottom: 1.5rem;">
                        20% LÝ THUYẾT
                    </div>
                    <h2 style="font-size: 1.5rem; font-weight: bold; margin: 0 0 1.5rem 0; color: #1e293b;">Cấu tạo & Quy tắc cốt lõi</h2>
                    
                    <div style="display: flex; flex-direction: column; gap: 1.5rem;">
                        <!-- Box 1 -->
                        <div style="padding: 1.25rem; border-left: 4px solid #3b82f6; background-color: #eff6ff; border-radius: 0 0.5rem 0.5rem 0;">
                            <h3 style="font-weight: bold; font-size: 1.125rem; color: #1e3a8a; margin: 0 0 0.5rem 0;">1. Danh từ chính (Head Noun)</h3>
                            <p style="color: #334155; margin: 0; line-height: 1.6;">Là trái tim của cụm từ. Trong tiếng Anh, <strong style="color: #1e293b;">danh từ chính luôn đứng ở cuối cùng</strong> của một cụm danh từ cơ bản.</p>
                        </div>

                        <!-- Box 2 -->
                        <div style="padding: 1.25rem; border-left: 4px solid #a855f7; background-color: #faf5ff; border-radius: 0 0.5rem 0.5rem 0;">
                            <h3 style="font-weight: bold; font-size: 1.125rem; color: #581c87; margin: 0 0 0.5rem 0;">2. Công thức "Sandwich" Cơ bản</h3>
                            <div style="display: flex; flex-wrap: wrap; gap: 0.75rem; align-items: center; margin-top: 0.75rem; font-family: monospace;">
                                <div style="background-color: #ffffff; padding: 0.5rem 1rem; border-radius: 0.25rem; box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05); border: 1px solid #e2e8f0; text-align: center;">
                                    <span style="font-size: 0.75rem; color: #64748b; display: block;">Từ định lượng/Mạo từ</span>
                                    <span style="font-weight: bold; color: #7e22ce;">Determiner</span>
                                </div>
                                <span style="color: #94a3b8; font-weight: bold;">+</span>
                                <div style="background-color: #ffffff; padding: 0.5rem 1rem; border-radius: 0.25rem; box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05); border: 1px solid #e2e8f0; text-align: center;">
                                    <span style="font-size: 0.75rem; color: #64748b; display: block;">Tính từ bổ nghĩa</span>
                                    <span style="font-weight: bold; color: #16a34a;">Adjective(s)</span>
                                </div>
                                <span style="color: #94a3b8; font-weight: bold;">+</span>
                                <div style="background-color: #ffffff; padding: 0.5rem 1rem; border-radius: 0.25rem; box-shadow: 0 0 0 2px #fca5a5; border: 1px solid #e2e8f0; text-align: center;">
                                    <span style="font-size: 0.75rem; color: #ef4444; font-weight: bold; display: block;">Danh từ chính</span>
                                    <span style="font-weight: bold; color: #dc2626;">Head Noun</span>
                                </div>
                            </div>
                            <p style="margin: 1rem 0 0 0; font-size: 0.875rem; color: #475569;">Ví dụ: <span style="font-weight: bold; color: #1e293b;">A</span> <span style="color: #16a34a;">small grey</span> <span style="color: #ef4444; font-weight: bold; text-decoration: underline;">mouse</span></p>
                        </div>

                        <!-- Box 3 -->
                        <div style="padding: 1.25rem; border-left: 4px solid #22c55e; background-color: #f0fdf4; border-radius: 0 0.5rem 0.5rem 0;">
                            <h3 style="font-weight: bold; font-size: 1.125rem; color: #14532d; margin: 0 0 0.5rem 0;">3. Tuyệt chiêu: Dịch Ngược</h3>
                            <p style="color: #334155; margin: 0; line-height: 1.6;">Khi gặp cụm danh từ, ta <strong style="color: #1e293b;">không dịch từ trái sang phải</strong>. Hãy tìm Danh từ chính ở cuối, dịch nó trước, sau đó dịch ngược dần lên các từ phía trước.</p>
                            <div style="margin-top: 0.75rem; background-color: #ffffff; padding: 0.75rem; border-radius: 0.25rem; border: 1px solid #e2e8f0; text-align: center;">
                                <p style="font-size: 1.125rem; margin: 0;">a <span style="color: #3b82f6;">beautiful</span> <span style="color: #22c55e;">old</span> <span style="color: #ef4444; font-weight: bold;">house</span></p>
                                <div style="display: flex; justify-content: center; margin: 0.5rem 0; color: #94a3b8; align-items: center; gap: 0.5rem;">
                                    <i data-lucide="arrow-left" style="width: 1.25rem; height: 1.25rem;"></i> Dịch ngược lên <i data-lucide="arrow-left" style="width: 1.25rem; height: 1.25rem;"></i>
                                </div>
                                <p style="font-size: 1.125rem; margin: 0;">Một <span style="color: #ef4444; font-weight: bold;">ngôi nhà</span> <span style="color: #22c55e;">cũ</span> <span style="color: #3b82f6;">đẹp</span></p>
                            </div>
                        </div>
                    </div>

                    <div style="margin-top: 2.5rem; display: flex; justify-content: flex-end;">
                        <button onclick="window.Tuduy_NPM1.goTo('highlight')" 
                                onmouseover="this.style.backgroundColor='#1d4ed8'" 
                                onmouseout="this.style.backgroundColor='#2563eb'" 
                                style="background-color: #2563eb; color: #ffffff; font-weight: 600; padding: 0.5rem 1.5rem; border-radius: 0.5rem; display: inline-flex; align-items: center; gap: 0.5rem; cursor: pointer; transition: background-color 0.2s; border: none; font-size: 1rem;">
                            Đã hiểu, tới phần Thực hành <i data-lucide="arrow-right" style="width: 1.125rem; height: 1.125rem;"></i>
                        </button>
                    </div>
                </section>
            `;
        },

        renderHighlight() {
            const state = this.state;
            const q = LESSON_DATA.highlight[state.hl_currentQ];
            const isCorrect = this.isHighlightCorrect();

            let wordsHtml = q.words.map((word, index) => {
                const isSelected = state.hl_selected.includes(index);
                const isWordCorrect = q.correctIndices.includes(index);
                
                let btnStyle = "padding: 0.5rem 0.75rem; border-radius: 0.5rem; cursor: pointer; border: 2px solid; font-size: 1.125rem; transition: all 0.2s; margin: 0; outline: none; font-family: inherit;";
                
                if (!state.hl_checked) {
                    if (isSelected) {
                        btnStyle += " background-color: #dbeafe; border-color: #3b82f6; color: #1e40af;";
                    } else {
                        btnStyle += " background-color: #ffffff; border-color: transparent; color: #334155; box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);";
                    }
                } else {
                    if (isWordCorrect && isSelected) {
                        btnStyle += " background-color: #dcfce3; border-color: #22c55e; color: #166534;";
                    } else if (isWordCorrect && !isSelected) {
                        btnStyle += " background-color: #fefce8; border-color: #facc15; color: #a16207; border-style: dashed;";
                    } else if (!isWordCorrect && isSelected) {
                        btnStyle += " background-color: #fee2e2; border-color: #ef4444; color: #991b1b;";
                    } else {
                        btnStyle += " background-color: #ffffff; border-color: transparent; color: #94a3b8; opacity: 0.5; cursor: default;";
                    }
                }

                return `<button onclick="window.Tuduy_NPM1.hl_toggle(${index})" style="${btnStyle}" ${state.hl_checked ? 'disabled' : ''}>${word}</button>`;
            }).join('');

            let feedbackHtml = '';
            if (state.hl_checked) {
                let fbBoxStyle = "padding: 1rem; border-radius: 0.5rem; margin-bottom: 1.5rem; display: flex; gap: 1rem; align-items: flex-start; border: 1px solid;";
                if (isCorrect) fbBoxStyle += " background-color: #f0fdf4; border-color: #bbf7d0;";
                else fbBoxStyle += " background-color: #fef2f2; border-color: #fecaca;";

                let textTitleStyle = "font-weight: bold; margin: 0 0 0.25rem 0; font-size: 1.125rem;";
                if (isCorrect) textTitleStyle += " color: #166534;";
                else textTitleStyle += " color: #991b1b;";

                feedbackHtml = `
                    <div style="${fbBoxStyle}">
                        ${isCorrect ? ICONS.correct : ICONS.wrong}
                        <div>
                            <h4 style="${textTitleStyle}">${isCorrect ? 'Chính xác!' : 'Chưa chính xác'}</h4>
                            <p style="color: #334155; margin: 0; line-height: 1.5;">${q.explanation}</p>
                        </div>
                    </div>
                `;
            }

            return `
                <section style="background-color: #ffffff; border-radius: 1rem; box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05); padding: 2rem; border: 1px solid #f1f5f9; animation: fadeIn 0.4s ease-out forwards;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                        <div style="display: inline-block; background-color: #dcfce3; color: #166534; font-weight: 600; padding: 0.25rem 1rem; border-radius: 9999px; font-size: 0.875rem;">
                            THỰC HÀNH 1: QUÉT MẮT & NHẬN BIẾT
                        </div>
                        <div style="color: #94a3b8; font-weight: 500;">${state.hl_currentQ + 1} / ${LESSON_DATA.highlight.length}</div>
                    </div>
                    
                    <h2 style="font-size: 1.25rem; font-weight: bold; margin: 0 0 0.5rem 0; color: #1e293b;">Bài tập Highlighting</h2>
                    <p style="color: #475569; margin: 0 0 2rem 0; line-height: 1.5;">Hãy nhấp (click) vào các từ để tạo thành <strong style="color: #1e293b;">Cụm danh từ đơn giản</strong> trong câu dưới đây.</p>

                    <div style="background-color: #f8fafc; padding: 2rem; border-radius: 0.75rem; border: 1px solid #e2e8f0; text-align: center; margin-bottom: 2rem;">
                        <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 0.75rem; font-size: 1.25rem;">
                            ${wordsHtml}
                        </div>
                    </div>

                    ${feedbackHtml}

                    <div style="display: flex; justify-content: space-between; margin-top: 2rem; align-items: center;">
                        <button onclick="window.Tuduy_NPM1.hl_retry()" style="background: none; border: none; color: #64748b; font-weight: 500; padding: 0.5rem 1rem; cursor: pointer; visibility: ${state.hl_checked ? 'visible' : 'hidden'};" onmouseover="this.style.color='#1e293b'" onmouseout="this.style.color='#64748b'">
                            Làm lại câu này
                        </button>
                        
                        ${!state.hl_checked ? `
                            <button onclick="window.Tuduy_NPM1.hl_check()" ${state.hl_selected.length === 0 ? 'disabled' : ''} 
                                    style="background-color: ${state.hl_selected.length === 0 ? '#cbd5e1' : '#2563eb'}; color: #ffffff; font-weight: 600; padding: 0.5rem 2rem; border-radius: 0.5rem; cursor: ${state.hl_selected.length === 0 ? 'not-allowed' : 'pointer'}; border: none; font-size: 1rem; transition: background-color 0.2s;"
                                    onmouseover="if(!this.disabled) this.style.backgroundColor='#1d4ed8'" 
                                    onmouseout="if(!this.disabled) this.style.backgroundColor='#2563eb'">
                                Kiểm tra
                            </button>
                        ` : `
                            <button onclick="window.Tuduy_NPM1.hl_next()" 
                                    style="background-color: #16a34a; color: #ffffff; font-weight: 600; padding: 0.5rem 2rem; border-radius: 0.5rem; display: inline-flex; align-items: center; gap: 0.5rem; cursor: pointer; border: none; font-size: 1rem; transition: background-color 0.2s;"
                                    onmouseover="this.style.backgroundColor='#15803d'" 
                                    onmouseout="this.style.backgroundColor='#16a34a'">
                                ${state.hl_currentQ < LESSON_DATA.highlight.length - 1 ? 'Câu tiếp theo' : 'Phần tiếp theo'} <i data-lucide="arrow-right" style="width: 1.125rem; height: 1.125rem;"></i>
                            </button>
                        `}
                    </div>
                </section>
            `;
        },

        renderTranslate() {
            const state = this.state;
            const q = LESSON_DATA.translate[state.tr_currentQ];
            const isCorrect = state.tr_selected === q.answer;

            let optionsHtml = q.options.map((opt, index) => {
                let btnStyle = "width: 100%; text-align: left; padding: 1rem; border-radius: 0.75rem; border: 2px solid; transition: all 0.2s; font-size: 1rem; margin-bottom: 0.75rem; font-family: inherit; outline: none; cursor: pointer; background-color: #ffffff; ";
                
                if (!state.tr_checked) {
                    if (state.tr_selected === index) {
                        btnStyle += "background-color: #eff6ff; border-color: #3b82f6; color: #1e3a8a; font-weight: 500;";
                    } else {
                        btnStyle += "border-color: #e2e8f0; color: #334155;";
                    }
                } else {
                    if (index === q.answer) {
                        btnStyle += "background-color: #f0fdf4; border-color: #22c55e; color: #166534; font-weight: 500; cursor: default;";
                    } else if (state.tr_selected === index) {
                        btnStyle += "background-color: #fef2f2; border-color: #ef4444; color: #991b1b; cursor: default;";
                    } else {
                        btnStyle += "border-color: #e2e8f0; color: #94a3b8; opacity: 0.5; cursor: default;";
                    }
                }

                return `<button onclick="window.Tuduy_NPM1.tr_select(${index})" style="${btnStyle}" ${state.tr_checked ? 'disabled' : ''}>${opt}</button>`;
            }).join('');

            let feedbackHtml = '';
            if (state.tr_checked) {
                let fbBoxStyle = "padding: 1rem; border-radius: 0.5rem; margin-bottom: 1.5rem; display: flex; gap: 1rem; align-items: flex-start; border: 1px solid;";
                if (isCorrect) fbBoxStyle += " background-color: #f0fdf4; border-color: #bbf7d0;";
                else fbBoxStyle += " background-color: #fef2f2; border-color: #fecaca;";

                let textTitleStyle = "font-weight: bold; margin: 0 0 0.25rem 0; font-size: 1.125rem;";
                if (isCorrect) textTitleStyle += " color: #166534;";
                else textTitleStyle += " color: #991b1b;";

                feedbackHtml = `
                    <div style="${fbBoxStyle}">
                        ${isCorrect ? ICONS.correct : ICONS.wrong}
                        <div>
                            <h4 style="${textTitleStyle}">${isCorrect ? 'Xuất sắc!' : 'Oops! Sai quy tắc rồi'}</h4>
                            <p style="color: #334155; margin: 0; line-height: 1.5;">${q.explanation}</p>
                        </div>
                    </div>
                `;
            }

            return `
                <section style="background-color: #ffffff; border-radius: 1rem; box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05); padding: 2rem; border: 1px solid #f1f5f9; animation: fadeIn 0.4s ease-out forwards;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                        <div style="display: inline-block; background-color: #dcfce3; color: #166534; font-weight: 600; padding: 0.25rem 1rem; border-radius: 9999px; font-size: 0.875rem;">
                            THỰC HÀNH 2: Luyện phản xạ dịch ngược
                        </div>
                        <div style="color: #94a3b8; font-weight: 500;">${state.tr_currentQ + 1} / ${LESSON_DATA.translate.length}</div>
                    </div>
                    
                    <h2 style="font-size: 1.25rem; font-weight: bold; margin: 0 0 0.5rem 0; color: #1e293b;">Dịch nghĩa cụm danh từ</h2>
                    <p style="color: #475569; margin: 0 0 2rem 0; line-height: 1.5;">Hãy áp dụng quy tắc dịch ngược để chọn nghĩa tiếng Việt chính xác nhất.</p>

                    <div style="background-color: #eff6ff; border-radius: 0.75rem; padding: 2rem; text-align: center; margin-bottom: 2rem; border: 1px solid #dbeafe;">
                        <h3 style="font-size: 1.5rem; font-weight: bold; color: #1e3a8a; margin: 0;">"${q.phrase}"</h3>
                    </div>

                    <div style="margin-bottom: 2rem;">
                        ${optionsHtml}
                    </div>

                    ${feedbackHtml}

                    <div style="display: flex; justify-content: flex-end; margin-top: 2rem;">
                        ${!state.tr_checked ? `
                            <button onclick="window.Tuduy_NPM1.tr_check()" ${state.tr_selected === null ? 'disabled' : ''} 
                                    style="background-color: ${state.tr_selected === null ? '#cbd5e1' : '#2563eb'}; color: #ffffff; font-weight: 600; padding: 0.5rem 2rem; border-radius: 0.5rem; cursor: ${state.tr_selected === null ? 'not-allowed' : 'pointer'}; border: none; font-size: 1rem; transition: background-color 0.2s;"
                                    onmouseover="if(!this.disabled) this.style.backgroundColor='#1d4ed8'" 
                                    onmouseout="if(!this.disabled) this.style.backgroundColor='#2563eb'">
                                Kiểm tra
                            </button>
                        ` : `
                            <button onclick="window.Tuduy_NPM1.tr_next()" 
                                    style="background-color: #16a34a; color: #ffffff; font-weight: 600; padding: 0.5rem 2rem; border-radius: 0.5rem; display: inline-flex; align-items: center; gap: 0.5rem; cursor: pointer; border: none; font-size: 1rem; transition: background-color 0.2s;"
                                    onmouseover="this.style.backgroundColor='#15803d'" 
                                    onmouseout="this.style.backgroundColor='#16a34a'">
                                ${state.tr_currentQ < LESSON_DATA.translate.length - 1 ? 'Câu tiếp theo' : 'Đến phần cuối'} <i data-lucide="arrow-right" style="width: 1.125rem; height: 1.125rem;"></i>
                            </button>
                        `}
                    </div>
                </section>
            `;
        },

        renderSandwich() {
            const state = this.state;
            const task = LESSON_DATA.sandwich[state.sw_currentQ];
            const isCorrect = this.isSandwichCorrect();

            let hintsHtml = task.hints.map(hint => `<li style="margin-bottom: 0.25rem;">${hint}</li>`).join('');
            
            let selectedHtml = state.sw_selected.map((word, index) => 
                `<button onclick="window.Tuduy_NPM1.sw_deselect('${word}', ${index})" 
                         style="background-color: #2563eb; color: #ffffff; padding: 0.5rem 1rem; border-radius: 0.5rem; box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1); border: none; cursor: pointer; transition: background-color 0.2s; font-size: 1rem; font-family: inherit; margin: 0;"
                         onmouseover="this.style.backgroundColor='#1d4ed8'" 
                         onmouseout="this.style.backgroundColor='#2563eb'">${word}</button>`
            ).join('');

            if (state.sw_selected.length === 0 && !state.sw_checked) {
                selectedHtml = `<span style="color: #94a3b8; font-style: italic; margin-top: 0.5rem; margin-left: 0.5rem;">Click vào các từ bên dưới để thêm vào đây...</span>`;
            }

            let availableHtml = state.sw_available.map((word, index) => 
                `<button onclick="window.Tuduy_NPM1.sw_select('${word}', ${index})" 
                         style="background-color: #ffffff; border: 1px solid #cbd5e1; color: #334155; padding: 0.5rem 1rem; border-radius: 0.5rem; box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05); cursor: pointer; transition: all 0.2s; font-size: 1rem; font-family: inherit; margin: 0;"
                         onmouseover="this.style.borderColor='#3b82f6'; this.style.color='#2563eb';" 
                         onmouseout="this.style.borderColor='#cbd5e1'; this.style.color='#334155';">${word}</button>`
            ).join('');

            let workspaceStyle = "min-height: 80px; padding: 1rem; border-radius: 0.75rem; border: 2px solid; display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: flex-start; transition: all 0.2s; ";
            if (state.sw_checked) {
                if (isCorrect) workspaceStyle += "background-color: #f0fdf4; border-color: #86efac;";
                else workspaceStyle += "background-color: #fef2f2; border-color: #fca5a5;";
            } else {
                workspaceStyle += "background-color: #f8fafc; border-style: dashed; border-color: #cbd5e1;";
            }

            let feedbackHtml = '';
            if (state.sw_checked) {
                let fbBoxStyle = "padding: 1rem; border-radius: 0.5rem; margin-bottom: 1.5rem; display: flex; gap: 1rem; align-items: flex-start; border: 1px solid;";
                if (isCorrect) fbBoxStyle += " background-color: #f0fdf4; border-color: #bbf7d0;";
                else fbBoxStyle += " background-color: #fef2f2; border-color: #fecaca;";

                let textTitleStyle = "font-weight: bold; margin: 0 0 0.25rem 0; font-size: 1.125rem;";
                if (isCorrect) textTitleStyle += " color: #166534;";
                else textTitleStyle += " color: #991b1b;";

                feedbackHtml = `
                    <div style="${fbBoxStyle}">
                        ${isCorrect ? ICONS.correct : ICONS.wrong}
                        <div>
                            <h4 style="${textTitleStyle}">${isCorrect ? 'Hoàn hảo!' : 'Sắp xếp chưa đúng rồi'}</h4>
                            ${!isCorrect ? `<p style="color: #334155; margin: 0.5rem 0 0 0;"><strong>Đáp án đúng:</strong> ${task.correctSequence.join(" ")}</p>` : ''}
                            <p style="color: #475569; margin: 0.25rem 0 0 0; font-style: italic;">Nghĩa: ${task.targetTranslation}</p>
                        </div>
                    </div>
                `;
            }

            return `
                <section style="background-color: #ffffff; border-radius: 1rem; box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05); padding: 2rem; border: 1px solid #f1f5f9; animation: fadeIn 0.4s ease-out forwards;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                        <div style="display: inline-block; background-color: #f3e8ff; color: #6b21a8; font-weight: 600; padding: 0.25rem 1rem; border-radius: 9999px; font-size: 0.875rem;">
                            THỰC HÀNH 3: XÂY DỰNG CỤM DANH TỪ
                        </div>
                        <div style="color: #94a3b8; font-weight: 500;">${state.sw_currentQ + 1} / ${LESSON_DATA.sandwich.length}</div>
                    </div>
                    
                    <h2 style="font-size: 1.25rem; font-weight: bold; margin: 0 0 0.5rem 0; color: #1e293b;">Trò chơi "The Triple-Decker Sandwich"</h2>
                    <p style="color: #475569; margin: 0 0 1.5rem 0; line-height: 1.5;">Từ các dữ kiện cho trước, hãy chọn và sắp xếp các từ để tạo thành một Cụm Danh Từ mở rộng hoàn chỉnh.</p>

                    <div style="background-color: #fffbeb; border: 1px solid #fde68a; border-radius: 0.75rem; padding: 1.25rem; margin-bottom: 2rem;">
                        <h3 style="font-weight: bold; color: #92400e; margin: 0 0 0.75rem 0; display: flex; align-items: center; gap: 0.5rem;">
                            <i data-lucide="target" style="width: 1.25rem; height: 1.25rem;"></i> Dữ liệu yêu cầu:
                        </h3>
                        <ul style="color: #78350f; margin: 0; padding-left: 1.5rem;">
                            ${hintsHtml}
                        </ul>
                    </div>

                    <div style="margin-bottom: 2rem;">
                        <p style="font-size: 0.875rem; font-weight: 600; color: #64748b; margin: 0 0 0.75rem 0; text-transform: uppercase; letter-spacing: 0.05em;">Câu của bạn:</p>
                        <div style="${workspaceStyle}">
                            ${selectedHtml}
                        </div>
                    </div>

                    <div style="margin-bottom: 2rem;">
                        <p style="font-size: 0.875rem; font-weight: 600; color: #64748b; margin: 0 0 0.75rem 0; text-transform: uppercase; letter-spacing: 0.05em;">Từ vựng (Có từ gây nhiễu):</p>
                        <div style="display: flex; flex-wrap: wrap; gap: 0.75rem;">
                            ${availableHtml}
                        </div>
                    </div>

                    ${feedbackHtml}

                    <div style="display: flex; justify-content: space-between; margin-top: 2rem; align-items: center;">
                        <button onclick="window.Tuduy_NPM1.sw_retry()" style="background: none; border: none; color: #64748b; font-weight: 500; padding: 0.5rem 1rem; cursor: pointer; visibility: ${state.sw_checked ? 'visible' : 'hidden'};" onmouseover="this.style.color='#1e293b'" onmouseout="this.style.color='#64748b'">
                            Làm lại
                        </button>
                        
                        ${!state.sw_checked ? `
                            <button onclick="window.Tuduy_NPM1.sw_check()" ${state.sw_selected.length === 0 ? 'disabled' : ''} 
                                    style="background-color: ${state.sw_selected.length === 0 ? '#cbd5e1' : '#2563eb'}; color: #ffffff; font-weight: 600; padding: 0.5rem 2rem; border-radius: 0.5rem; cursor: ${state.sw_selected.length === 0 ? 'not-allowed' : 'pointer'}; border: none; font-size: 1rem; transition: background-color 0.2s;"
                                    onmouseover="if(!this.disabled) this.style.backgroundColor='#1d4ed8'" 
                                    onmouseout="if(!this.disabled) this.style.backgroundColor='#2563eb'">
                                Kiểm tra
                            </button>
                        ` : `
                            <button onclick="window.Tuduy_NPM1.sw_next()" 
                                    style="background-color: #16a34a; color: #ffffff; font-weight: 600; padding: 0.5rem 2rem; border-radius: 0.5rem; display: inline-flex; align-items: center; gap: 0.5rem; cursor: pointer; border: none; font-size: 1rem; transition: background-color 0.2s;"
                                    onmouseover="this.style.backgroundColor='#15803d'" 
                                    onmouseout="this.style.backgroundColor='#16a34a'">
                                ${state.sw_currentQ < LESSON_DATA.sandwich.length - 1 ? 'Thử thách tiếp theo' : 'Hoàn thành Module'} <i data-lucide="arrow-right" style="width: 1.125rem; height: 1.125rem;"></i>
                            </button>
                        `}
                    </div>
                </section>
            `;
        },

        renderSummary() {
            return `
                <section style="background-color: #ffffff; border-radius: 1rem; box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05); padding: 2.5rem; text-align: center; border: 1px solid #f1f5f9; animation: fadeIn 0.4s ease-out forwards;">
                    <div style="width: 6rem; height: 6rem; background-color: #dcfce3; color: #16a34a; border-radius: 9999px; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem;">
                        <i data-lucide="award" style="width: 3rem; height: 3rem;"></i>
                    </div>
                    <h2 style="font-size: 1.875rem; font-weight: bold; margin: 0 0 1rem 0; color: #1e293b;">Chúc mừng bạn!</h2>
                    <p style="font-size: 1.125rem; color: #475569; margin: 0 auto 2rem auto; max-width: 36rem; line-height: 1.6;">
                        Bạn đã hoàn thành xuất sắc <strong style="color: #1e293b;">Module 1: Nền tảng cơ bản về Cụm Danh Từ</strong>. 
                    </p>
                    
                    <div style="background-color: #eff6ff; border: 1px solid #dbeafe; padding: 1.5rem; border-radius: 0.75rem; text-align: left; max-width: 36rem; margin: 0 auto 2rem auto;">
                        <h3 style="font-weight: bold; color: #1e3a8a; margin: 0 0 0.75rem 0;">Tóm tắt hành trang bạn đã nhận được:</h3>
                        <ul style="color: #1e40af; margin: 0; padding-left: 1.5rem; line-height: 1.6;">
                            <li style="margin-bottom: 0.5rem;">Hiểu được <strong style="color: #1e3a8a;">Danh từ chính</strong> nằm ở cuối cụm.</li>
                            <li style="margin-bottom: 0.5rem;">Nắm được quy tắc <strong style="color: #1e3a8a;">Dịch ngược</strong> thần thánh.</li>
                            <li style="margin-bottom: 0;">Phân tích và tự tay xây dựng được những cụm danh từ dài.</li>
                        </ul>
                    </div>

                    <button onclick="window.Tuduy_NPM1.resetAll()" 
                            style="background: none; color: #2563eb; font-weight: 600; padding: 0.5rem 1.5rem; border-radius: 0.5rem; display: inline-flex; align-items: center; gap: 0.5rem; cursor: pointer; border: none; font-size: 1rem; transition: color 0.2s;"
                            onmouseover="this.style.color='#1e40af'" 
                            onmouseout="this.style.color='#2563eb'">
                        <i data-lucide="refresh-cw" style="width: 1.125rem; height: 1.125rem;"></i> Học lại từ đầu
                    </button>
                </section>
            `;
        },

        // --- Hàm Render Chính ---
        render() {
            const container = document.getElementById(this.containerId);
            if (!container) return; // Nếu container không tồn tại trên trang thì bỏ qua
            
            let contentHtml = '';
            switch (this.state.currentSection) {
                case 'intro': contentHtml = this.renderIntro(); break;
                case 'theory': contentHtml = this.renderTheory(); break;
                case 'highlight': contentHtml = this.renderHighlight(); break;
                case 'translate': contentHtml = this.renderTranslate(); break;
                case 'sandwich': contentHtml = this.renderSandwich(); break;
                case 'summary': contentHtml = this.renderSummary(); break;
            }

            container.innerHTML = `
                ${this.renderHeader()}
                <main style="max-width: 56rem; width: 100%; margin: 2rem auto 0 auto; padding: 0 1rem; flex-grow: 1; box-sizing: border-box;">
                    ${contentHtml}
                </main>
            `;

            if (window.lucide) {
                window.lucide.createIcons();
            }
        }
    };

})(); // Kết thúc IIFE cho Module 1

// ==========================================
// MODULE 2: (Gợi ý cách viết tiếp)
// ==========================================
/*
(function() {
    const LESSON_DATA = { ... };
    const ICONS = { ... };

    window.Tuduy_NPM2 = {
        containerId: '',
        state: { ... },
        init(containerId) { ... },
        render() { ... }
    };
})();
*/
