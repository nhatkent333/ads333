/* ==========================================================================
       1. DATA DEFINITIONS (24 MULTIPLE CHOICE + 8 TRUE/FALSE + 4 ESSAYS)
       ========================================================================== */
    const RAW_QUESTIONS = [
      {
        id: 1, part: 1, type: 'single',
        title: "Truyền thống đánh giặc giữ nước của dân tộc ta được thể hiện qua tinh thần nào?",
        options: [
          { key: 'A', text: "Tinh thần đoàn kết, tương thân tương ái.", isCorrect: false },
          { key: 'B', text: "Tinh thần nồng nàn yêu nước, sẵn sàng xả thân vì độc lập.", isCorrect: true },
          { key: 'C', text: "Chờ đợi sự giúp đỡ, viện trợ hoàn toàn từ bên ngoài.", isCorrect: false },
          { key: 'D', text: "Thỏa hiệp, nhượng bộ lãnh thổ khi gặp kẻ thù mạnh.", isCorrect: false }
        ],
        explanation: "Tinh thần nồng nàn yêu nước, sẵn sàng xả thân vì độc lập là truyền thống quý báu và cốt lõi nhất của dân tộc ta trong sự nghiệp dựng nước và giữ nước."
      },
      {
        id: 2, part: 1, type: 'single',
        title: "Việc làm phụng dưỡng Mẹ Việt Nam Anh hùng ở địa phương thể hiện truyền thống nào?",
        options: [
          { key: 'A', text: "Tương thân tương ái.", isCorrect: false },
          { key: 'B', text: "Tôn sư trọng đạo.", isCorrect: false },
          { key: 'C', text: "Uống nước nhớ nguồn.", isCorrect: true },
          { key: 'D', text: "Cần cù, sáng tạo trong lao động.", isCorrect: false }
        ],
        explanation: "Phụng dưỡng Mẹ Việt Nam Anh hùng thể hiện đạo lý và lòng biết ơn sâu sắc đối với người có công lao hy sinh vì Tổ quốc - truyền thống 'Uống nước nhớ nguồn'."
      },
      {
        id: 3, part: 1, type: 'single',
        title: "Biểu hiện của một người biết quan tâm đến cảm xúc của người khác trong giao tiếp là",
        options: [
          { key: 'A', text: "nói những lời châm chọc khuyết điểm của người khác.", isCorrect: false },
          { key: 'B', text: "chọn lời lẽ tế nhị để không làm tổn thương người nghe.", isCorrect: true },
          { key: 'C', text: "luôn áp đặt suy nghĩ của mình lên người khác.", isCorrect: false },
          { key: 'D', text: "cố chấp tranh cãi đến cùng dù biết mình sai.", isCorrect: false }
        ],
        explanation: "Giao tiếp tế nhị, nhã nhặn, biết tôn trọng cảm xúc và thể diện của người đối thoại là biểu hiện của người có văn hóa và biết quan tâm người khác."
      },
      {
        id: 4, part: 1, type: 'single',
        title: "Loại hình nghệ thuật truyền thống nào gắn liền với đời sống sinh hoạt văn hóa của người dân vùng đồng bằng Bắc Bộ?",
        options: [
          { key: 'A', text: "Múa rối nước.", isCorrect: true },
          { key: 'B', text: "Đờn ca tài tử.", isCorrect: false },
          { key: 'C', text: "Hát Cải lương.", isCorrect: false },
          { key: 'D', text: "Hát Bài chòi.", isCorrect: false }
        ],
        explanation: "Múa rối nước là nét nghệ thuật dân gian độc đáo sinh ra từ nền văn minh lúa nước sông Hồng ở vùng đồng bằng Bắc Bộ."
      },
      {
        id: 5, part: 1, type: 'single',
        title: "Hành vi thể hiện sự thiếu quan tâm và vô cảm với người xung quanh",
        options: [
          { key: 'A', text: "nhường chỗ ngồi trên xe buýt cho người cao tuổi, phụ nữ mang thai.", isCorrect: false },
          { key: 'B', text: "thăm hỏi thầy cô giáo cũ nhân ngày Nhà giáo Việt Nam.", isCorrect: false },
          { key: 'C', text: "bàng quan, dửng dưng trước những khó khăn của người khác.", isCorrect: true },
          { key: 'D', text: "tích cực tham gia các hoạt động thiện nguyện ở địa phương.", isCorrect: false }
        ],
        explanation: "Bàng quan, thờ ơ, dửng dưng trước nỗi đau và khó khăn của đồng loại là biểu hiện tiêu biểu của thói vô cảm, ích kỷ."
      },
      {
        id: 6, part: 1, type: 'single',
        title: "Hành vi nào là biểu hiện của sự tự giác trong học tập?",
        options: [
          { key: 'A', text: "Chỉ làm bài tập khi bị cha mẹ nhắc nhở, đôn đốc.", isCorrect: false },
          { key: 'B', text: "Chủ động lập kế hoạch học tập và tự giác hoàn thành đúng hạn.", isCorrect: true },
          { key: 'C', text: "Chờ đến sát giờ kiểm tra mới mở sách vở ra học qua loa.", isCorrect: false },
          { key: 'D', text: "Sao chép bài giải của bạn để nộp cho xong nhiệm vụ.", isCorrect: false }
        ],
        explanation: "Chủ động lên thời gian biểu và hoàn thành bài tập đúng hạn mà không cần ai thúc giục là biểu hiện chuẩn của người học tự giác."
      },
      {
        id: 7, part: 1, type: 'single',
        title: "Hành động nào thể hiện sự chia sẻ vật chất với người khó khăn?",
        options: [
          { key: 'A', text: "Dùng điện thoại quay phim khi thấy người gặp nạn trên đường.", isCorrect: false },
          { key: 'B', text: "Góp một phần quần áo cũ, sách vở để ủng hộ học sinh vùng cao.", isCorrect: true },
          { key: 'C', text: "Chê bai những món quà từ thiện có giá trị nhỏ.", isCorrect: false },
          { key: 'D', text: "Giữ lại tất cả vật dụng không dùng đến thay vì đem cho.", isCorrect: false }
        ],
        explanation: "Quyên góp quần áo ấm, sách vở, tập viết hỗ trợ các bạn khó khăn là hành động chia sẻ vật chất thiết thực và nhân ái."
      },
      {
        id: 8, part: 1, type: 'single',
        title: "Biểu hiện nào cho thấy một người biết lắng nghe và chia sẻ tinh thần?",
        options: [
          { key: 'A', text: "Cắt ngang lời khi người khác đang tâm sự để nói về chuyện của mình.", isCorrect: false },
          { key: 'B', text: "Lướt điện thoại trong khi người khác đang nói chuyện với mình.", isCorrect: false },
          { key: 'C', text: "Lắng nghe nhưng không chú tâm vì chẳng phải chuyện của mình.", isCorrect: false },
          { key: 'D', text: "Chăm chú lắng nghe, gật đầu đồng cảm và đưa ra lời khuyên chân thành.", isCorrect: true }
        ],
        explanation: "Tập trung lắng nghe, thấu hiểu và chân thành cho lời khuyên là sự hỗ trợ tinh thần vô giá đối với người đang gặp biến cố."
      },
      {
        id: 9, part: 1, type: 'single',
        title: "Hành vi nào thể hiện sự chia sẻ kinh nghiệm, kiến thức cho bạn bè?",
        options: [
          { key: 'A', text: "Giấu tài liệu học tập, không chỉ bài cho ai vì sợ bạn vượt qua mình.", isCorrect: false },
          { key: 'B', text: "Sẵn sàng giảng giải bài tập khó khi bạn chưa hiểu bài.", isCorrect: true },
          { key: 'C', text: "Cố tình chỉ sai kiến thức để bạn làm bài kiểm tra kém điểm.", isCorrect: false },
          { key: 'D', text: "Tự học một mình và không bao giờ thảo luận nhóm.", isCorrect: false }
        ],
        explanation: "Sẵn lòng hướng dẫn, giảng giải cặn kẽ cho bạn khi bạn chưa hiểu là hành động sẻ chia tri thức đẹp trong học đường."
      },
      {
        id: 10, part: 1, type: 'single',
        title: "Việc làm thể hiện tinh thần tự học và tìm tòi kiến thức ngoài giờ học là",
        options: [
          { key: 'A', text: "tìm kiếm thêm tài liệu, đọc sách tham khảo để mở rộng hiểu biết.", isCorrect: true },
          { key: 'B', text: "học đúng những nội dung được ghi chép trên lớp.", isCorrect: false },
          { key: 'C', text: "bỏ qua những bài tập khó và chờ thầy cô sửa bài trên lớp.", isCorrect: false },
          { key: 'D', text: "từ chối tham gia các buổi thảo luận nhóm vì tốn thời gian.", isCorrect: false }
        ],
        explanation: "Tự giác tìm đọc thêm sách báo, tài liệu tham khảo bên ngoài giúp mở rộng vốn hiểu biết và rèn luyện năng lực tự học."
      },
      {
        id: 11, part: 1, type: 'single',
        title: "Hành vi nào thể hiện sự quan tâm đến người khác?",
        options: [
          { key: 'A', text: "Lơ đễnh, phớt lờ khi bạn bè đang gặp chuyện buồn.", isCorrect: false },
          { key: 'B', text: "Hỏi thăm, động viên khi thấy bạn có vẻ mệt mỏi, lo lắng.", isCorrect: true },
          { key: 'C', text: "Cười chê khi bạn làm sai một việc nhỏ.", isCorrect: false },
          { key: 'D', text: "Chỉ quan tâm đến công việc và cảm xúc của riêng mình.", isCorrect: false }
        ],
        explanation: "Để ý và kịp thời hỏi han, động viên khi thấy bạn có dấu hiệu buồn lo là hành động quan tâm ấm áp."
      },
      {
        id: 12, part: 1, type: 'single',
        title: "Hành vi nào không phải là biểu hiện của người học tập tự giác, tích cực?",
        options: [
          { key: 'A', text: "Luôn chuẩn bị đầy đủ sách vở, đồ dùng học tập trước khi đến trường.", isCorrect: false },
          { key: 'B', text: "Biết tự rút kinh nghiệm và sửa chữa những sai sót sau mỗi bài kiểm tra.", isCorrect: false },
          { key: 'C', text: "Chỉ học khi có áp lực từ điểm số hoặc sự giám sát của người lớn.", isCorrect: true },
          { key: 'D', text: "Chủ động trao đổi, hỏi thầy cô và bạn bè những phần kiến thức chưa hiểu.", isCorrect: false }
        ],
        explanation: "Chỉ học khi bị ép buộc hoặc do người lớn giám sát là biểu hiện thụ động, đối phó chứ không tự giác."
      },
      {
        id: 13, part: 1, type: 'single',
        title: "Truyền thống nhân nghĩa của dân tộc ta được thể hiện qua tinh thần",
        options: [
          { key: 'A', text: "tương thân tương ái.", isCorrect: true },
          { key: 'B', text: "yêu nước nồng nàn.", isCorrect: false },
          { key: 'C', text: "kiên trung, bất khuất.", isCorrect: false },
          { key: 'D', text: "đại đoàn kết.", isCorrect: false }
        ],
        explanation: "Truyền thống nhân nghĩa gắn liền với tinh thần tương thân tương ái, cưu mang giúp đỡ nhau khi hoạn nạn."
      },
      {
        id: 14, part: 1, type: 'single',
        title: "Việc tự giác kiểm tra lại bài làm và tự sửa chữa các lỗi sai sau khi nhận lại bài kiểm tra thể hiện thái độ",
        options: [
          { key: 'A', text: "học tập vì muốn phô trương thành tích.", isCorrect: false },
          { key: 'B', text: "nghiêm túc và có trách nhiệm với kết quả học tập.", isCorrect: true },
          { key: 'C', text: "học tập mang tính chống đối, phó mặc.", isCorrect: false },
          { key: 'D', text: "đề cao vẻ điểm số trong học tập.", isCorrect: false }
        ],
        explanation: "Tự rà soát và khắc phục lỗi sai phản ánh thái độ học tập nghiêm túc, có trách nhiệm và cầu tiến."
      },
      {
        id: 15, part: 1, type: 'single',
        title: "Việc làm nào thể hiện tinh thần sẻ chia với cộng đồng?",
        options: [
          { key: 'A', text: "Xả rác bừa bãi ra nơi công cộng vì có lao công dọn dẹp.", isCorrect: false },
          { key: 'B', text: "Tham gia chiến dịch tình nguyện \"Chủ nhật xanh\".", isCorrect: true },
          { key: 'C', text: "Gây gổ, mất trật tự ở nơi tập trung đông người.", isCorrect: false },
          { key: 'D', text: "Tiết kiệm điện, nước tại nhà.", isCorrect: false }
        ],
        explanation: "Tích cực tham gia các phong trào tình nguyện như 'Chủ nhật xanh' là hành động sẻ chia trách nhiệm giữ gìn xã hội."
      },
      {
        id: 16, part: 1, type: 'single',
        title: "Hoạt động thăm hỏi gia đình thương binh - bệnh binh ở địa phương thể hiện truyền thống nào?",
        options: [
          { key: 'A', text: "Tương thân tương ái.", isCorrect: false },
          { key: 'B', text: "Tôn sư trọng đạo.", isCorrect: false },
          { key: 'C', text: "Uống nước nhớ nguồn.", isCorrect: true },
          { key: 'D', text: "Cần cù, sáng tạo trong lao động.", isCorrect: false }
        ],
        explanation: "Tri ân, thăm hỏi thương binh bệnh binh thể hiện lòng biết ơn người có công với non sông - truyền thống 'Uống nước nhớ nguồn'."
      },
      {
        id: 17, part: 1, type: 'single',
        title: "Lễ hội truyền thống nào được tổ chức vào ngày 10 tháng 03 âm lịch hằng năm tại Phú Thọ?",
        options: [
          { key: 'A', text: "Lễ hội Chùa Hương.", isCorrect: false },
          { key: 'B', text: "Lễ hội Cầu ngư.", isCorrect: false },
          { key: 'C', text: "Lễ hội Đền Hùng.", isCorrect: true },
          { key: 'D', text: "Lễ hội Gióng.", isCorrect: false }
        ],
        explanation: "Giỗ Tổ Hùng Vương - Lễ hội Đền Hùng diễn ra vào mùng 10 tháng 3 âm lịch tại Khu di tích lịch sử Đền Hùng, tỉnh Phú Thọ."
      },
      {
        id: 18, part: 1, type: 'single',
        title: "Biểu hiện nào là sự cảm thông với hoàn cảnh của người khác?",
        options: [
          { key: 'A', text: "Đặt mình vào vị trí của người khác để thấu hiểu nỗi buồn của họ.", isCorrect: true },
          { key: 'B', text: "Cho rằng khó khăn của người khác là chuyện bình thường.", isCorrect: false },
          { key: 'C', text: "Xa lánh, kì thị những người có hoàn cảnh bất hạnh.", isCorrect: false },
          { key: 'D', text: "Cười cợt trước những rủi ro mà người khác gặp phải.", isCorrect: false }
        ],
        explanation: "Cảm thông nghĩa là biết thấu hiểu từ góc nhìn của người khác, biết chia sẻ với nỗi buồn và bất hạnh của họ."
      },
      {
        id: 19, part: 1, type: 'single',
        title: "Khi gặp bài tập phức tạp, học sinh có tinh thần tự giác, tích cực sẽ",
        options: [
          { key: 'A', text: "bỏ qua ngay lập tức và lý do là do đề quá khó.", isCorrect: false },
          { key: 'B', text: "kiên trì suy nghĩ, tìm hiểu từ kiến thức cũ.", isCorrect: true },
          { key: 'C', text: "chờ đến giờ lên lớp để chép lại đáp án từ bạn bè.", isCorrect: false },
          { key: 'D', text: "than phiền giáo viên giao bài tập khó.", isCorrect: false }
        ],
        explanation: "Tinh thần tự giác thúc đẩy người học kiên trì đào sâu kiến thức cũ và tìm tòi phương pháp mới để vượt qua bài khó."
      },
      {
        id: 20, part: 1, type: 'single',
        title: "Khi thấy một bạn học sinh bị ngã xe đạp trên đường đến trường, hành vi nào thể hiện sự quan tâm, chia sẻ?",
        options: [
          { key: 'A', text: "Đứng lại xem rồi bàn tán cùng đám đông.", isCorrect: false },
          { key: 'B', text: "Nhanh chóng đỡ bạn, kiểm tra vết thương và giúp nhặt đồ.", isCorrect: true },
          { key: 'C', text: "Đi tiếp vì sợ bị muộn học và không liên quan đến mình.", isCorrect: false },
          { key: 'D', text: "Chỉ trỏ và chê bạn vụng về.", isCorrect: false }
        ],
        explanation: "Chạy đến đỡ bạn dậy, xem vết thương và nhặt đồ giúp bạn là sự hỗ trợ thiết thực, thể hiện tình người sâu sắc."
      },
      {
        id: 21, part: 1, type: 'single',
        title: "Hành động thể hiện sự quan tâm đối với người thân trong gia đình",
        options: [
          { key: 'A', text: "tự giác làm việc nhà để phụ giúp bố mẹ.", isCorrect: true },
          { key: 'B', text: "đóng cửa phòng và mặc kệ mọi việc trong nhà.", isCorrect: false },
          { key: 'C', text: "chỉ biết đòi hỏi quà cáp và tiền bạc từ gia đình.", isCorrect: false },
          { key: 'D', text: "chỉ học tập khi được bố mẹ nhắc nhở.", isCorrect: false }
        ],
        explanation: "Tự giác san sẻ việc nhà giúp cha mẹ đỡ vất vả là biểu hiện hiếu thảo và biết yêu thương người thân."
      },
      {
        id: 22, part: 1, type: 'single',
        title: "Khi bạn bè gặp điểm kém và đang buồn bã, hành vi nào thể hiện sự cảm thông, chia sẻ?",
        options: [
          { key: 'A', text: "Lớn tiếng chê bai bạn học kém.", isCorrect: false },
          { key: 'B', text: "Động viên và rủ bạn cùng học để cải thiện kết quả.", isCorrect: true },
          { key: 'C', text: "Lảng tránh và không thèm chơi cùng bạn nữa.", isCorrect: false },
          { key: 'D', text: "Cười đùa để trêu chọc bạn.", isCorrect: false }
        ],
        explanation: "Động viên và cùng bạn ôn bài để bạn tiến bộ là sự cảm thông chân thành, giúp bạn có thêm niềm tin."
      },
      {
        id: 23, part: 1, type: 'single',
        title: "Biểu hiện nào thể hiện sự tích cực, chủ động trong giờ học trên lớp?",
        options: [
          { key: 'A', text: "Ngồi im lặng, không ghi chép bài và lướt điện thoại dưới gầm bàn.", isCorrect: false },
          { key: 'B', text: "Tập trung chú ý nghe giảng, tích cực hăng hái phát biểu xây dựng bài.", isCorrect: true },
          { key: 'C', text: "Làm việc riêng hoặc nói chuyện gây mất trật tự trong giờ học.", isCorrect: false },
          { key: 'D', text: "Thường xuyên học bài và làm bài trước khi đến lớp.", isCorrect: false }
        ],
        explanation: "Tập trung nghe thầy cô giảng và năng nổ phát biểu xây dựng bài là biểu hiện chuẩn của tinh thần học tập tích cực."
      },
      {
        id: 24, part: 1, type: 'single',
        title: "Hành động nào không phải là biểu hiện của sự quan tâm, cảm thông và chia sẻ?",
        options: [
          { key: 'A', text: "Chung tay quyên góp tiền hỗ trợ đồng bào bị lũ lụt.", isCorrect: false },
          { key: 'B', text: "Không trung thực khi làm bài kiểm tra.", isCorrect: false },
          { key: 'C', text: "Đố kỵ, ganh ghét khi thấy người khác đạt được thành công.", isCorrect: true },
          { key: 'D', text: "Lắng nghe những tâm tư của người thân khi họ gặp trắc trở.", isCorrect: false }
        ],
        explanation: "Đố kỵ, ghen tức với thành công của người khác là thói xấu ích kỷ, đi ngược lại tinh thần sẻ chia và bao dung."
      },

      // --- PHẦN II: DẠNG ĐÚNG / SAI THEO TÌNH HUỐNG (25 - 32) ---
      {
        id: 25, part: 2, type: 'multiple-tf',
        title: "Đọc thông tin và xác định tính Đúng/Sai của các nhận định:",
        scenario: "Trong đợt bão lũ nghiêm trọng tràn qua tỉnh miền Trung, gia đình bạn N bị ngập sâu, hư hỏng toàn bộ hoa màu và đồ dùng sinh hoạt. Biết tin, bạn M - Lớp trưởng đã chủ động hỏi thăm, động viên N và đề xuất với cô giáo chủ nhiệm phát động phong trào \"Vòng tay bè bạn\" trong lớp. M vận động các bạn quyên góp để hỗ trợ N vượt qua khó khăn. Ngược lại, bạn B lại nói: \"Nhà bạn ấy nghèo thì phải chịu, việc gì mình phải rước phiền phức vào người\".",
        statements: [
          { id: '25a', label: 'a', text: "Hành động thăm hỏi và vận động quyên góp giúp đỡ N của bạn M là biểu hiện của sự quan tâm, cảm thông và chia sẻ với người khác.", isCorrect: true },
          { id: '25b', label: 'b', text: "Sự quan tâm, cảm thông và chia sẻ giúp người gặp khó khăn có thêm niềm tin, nghị lực để vượt qua biến cố.", isCorrect: true },
          { id: '25c', label: 'c', text: "Việc lan tỏa các hành động chia sẻ trong lớp học giúp củng cố tinh thần đoàn kết.", isCorrect: true },
          { id: '25d', label: 'd', text: "Thái độ của bạn B thể hiện lối sống tự lập, không quan tâm đến chuyện riêng của người khác nên cần được nhân rộng.", isCorrect: false }
        ],
        explanation: "Thái độ của bạn B là thờ ơ, vô cảm trước tai họa của bạn mình chứ không phải tự lập; cần phải phê phán chứ không được nhân rộng."
      },
      {
        id: 26, part: 2, type: 'multiple-tf',
        title: "Đọc thông tin và xác định tính Đúng/Sai của các nhận định:",
        scenario: "Trên đường đi học về, bạn H và T thấy một cụ bà bị ngã xe đạp, rau củ văng tung tóe trên đường. H lập tức dừng xe, chạy lại đỡ cụ bà dậy, dắt xe vào vỉa hè và gom giúp rau củ. Thấy vậy, T đứng trên xe giục: \"Sắp muộn giờ chơi game rồi, kệ người ta đi!\". H không nghe theo T mà còn nhắc T cùng lại hỗ trợ cụ bà, sau đó mới tiếp tục đi về.",
        statements: [
          { id: '26a', label: 'a', text: "Hành động đỡ cụ bà dậy và gom giúp đồ đạc của bạn H là biểu hiện của sự quan tâm, cảm thông và hỗ trợ người khác lúc gặp sự cố.", isCorrect: true },
          { id: '26b', label: 'b', text: "Hỗ trợ kịp thời đối với người gặp tai nạn giúp hạn chế tổn thương và góp phần xây dựng một xã hội an toàn, văn minh.", isCorrect: true },
          { id: '26c', label: 'c', text: "Giúp đỡ người khác khi gặp khó khăn chỉ gây tốn thời gian cá nhân chứ không mang lại bất kỳ giá trị nào cho bản thân người giúp.", isCorrect: false },
          { id: '26d', label: 'd', text: "Bạn H đã thể hiện sự quan tâm, chia sẻ đúng đắn, đồng thời thẳng thắn khích lệ, nhắc nhở bạn T loại bỏ thái độ thờ ơ, vô cảm.", isCorrect: true }
        ],
        explanation: "Giúp đỡ người khác giúp tâm hồn thanh thản, rèn luyện nhân cách và xây dựng xã hội gắn kết nhân văn, không hề vô ích như ý c nhận định."
      },
      {
        id: 27, part: 2, type: 'multiple-tf',
        title: "Đọc thông tin và xác định tính Đúng/Sai của các nhận định:",
        scenario: "Chuẩn bị cho bài kiểm tra cuối kì, bạn N đã tự lập kế hoạch ôn tập chi tiết cho từng tuần. Không chỉ hoàn thành bài tập giáo viên giao trên lớp, N còn chủ động tìm đọc thêm tài liệu, sách nâng cao và lập nhóm học tập trực tuyến để cùng trao đổi các bài tập khó với bạn bè. Ngược lại, bạn H lại thường xuyên chờ đến sát ngày kiểm tra mới học và tranh thủ chép bài của N trong giờ ra chơi.",
        statements: [
          { id: '27a', label: 'a', text: "Việc N tự lập kế hoạch học tập, chủ động tìm đọc tài liệu và lập nhóm trao đổi kiến thức là biểu hiện của tinh thần học tập tự giác, tích cực.", isCorrect: true },
          { id: '27b', label: 'b', text: "Tinh thần học tập tự giác, tích cực giúp N không ngừng mở rộng tri thức, rèn luyện kỹ năng.", isCorrect: true },
          { id: '27c', label: 'c', text: "Việc chủ động học tập chỉ giúp ích cho kết quả thi cử của cá nhân chứ không có giá trị gì đối với sự phát triển chung của xã hội.", isCorrect: false },
          { id: '27d', label: 'd', text: "Để giữ gìn tình bạn thay vì nhắc nhở hay góp ý, N nên tiếp tục cho H chép bài.", isCorrect: false }
        ],
        explanation: "Học tập tự giác tạo nên thế hệ công dân có thực tài cho xã hội (c sai). Cho bạn chép bài là bao che thói lười, làm hại bạn (d sai)."
      },
      {
        id: 28, part: 2, type: 'multiple-tf',
        title: "Đọc thông tin và xác định tính Đúng/Sai của các nhận định:",
        scenario: "Bạn M gặp khó khăn với môn Tiếng Anh. Thay vì chán nản hay bỏ mặc, M đã tự giác dành 1 tiếng mỗi tối để học từ vựng, nghe video bài giảng trên mạng và dán các thẻ từ ghi nhớ xung quanh góc học tập. Thấy bạn A cùng bàn thường xuyên chơi điện tử và không chuẩn bị bài trước khi đến lớp, M đã chân thành góp ý: \"Nếu cậu không tự giác học từ bây giờ thì sẽ mất gốc kiến thức!\" và rủ A cùng học nhóm.",
        statements: [
          { id: '28a', label: 'a', text: "Việc M kiên trì tự học Tiếng Anh hằng ngày và dán thẻ từ ghi nhớ là biểu hiện của sự tự giác, vượt khó trong học tập.", isCorrect: true },
          { id: '28b', label: 'b', text: "Việc học tập tự giác, tích cực giúp M từng bước khắc phục điểm yếu môn học, củng cố niềm tin và ý chí vươn lên.", isCorrect: true },
          { id: '28c', label: 'c', text: "Tự giác học tập đòi hỏi phải học một mình quá nhiều, dễ khiến học sinh trở nên cô lập và khó kết bạn.", isCorrect: false },
          { id: '28d', label: 'd', text: "Hành động rủ bạn cùng học của M thể hiện việc biết giúp bạn bè khắc phục tính lười biếng, thụ động.", isCorrect: true }
        ],
        explanation: "Học tập tự giác hoàn toàn có thể kết hợp qua các buổi học nhóm, trao đổi giúp đỡ bạn bè cùng tiến bộ (ý c sai)."
      },
      {
        id: 29, part: 2, type: 'multiple-tf',
        title: "Đọc thông tin và xác định tính Đúng/Sai của các nhận định:",
        scenario: "Bạn T là học sinh mới chuyển đến lớp 9B. Do hoàn cảnh gia đình khó khăn và còn bỡ ngỡ với môi trường mới, T tỏ ra rụt rè, ít nói và học sút môn Toán. Thấy vậy, bạn N đã chủ động đến ngồi cùng bàn, trò chuyện lắng nghe tâm sự của T và đề xuất lập nhóm \"Đôi bạn cùng tiến\" để giảng lại bài cho T sau giờ học. Nhờ sự giúp đỡ kiên trì của N, T đã tự tin hơn và đạt kết quả cao trong bài kiểm tra giữa kỳ.",
        statements: [
          { id: '29a', label: 'a', text: "Việc N chủ động trò chuyện và giảng bài giúp T là biểu hiện của sự quan tâm, cảm thông và chia sẻ.", isCorrect: true },
          { id: '29b', label: 'b', text: "Sự giúp đỡ chân thành của N giúp T vượt qua rào cản tâm lý, hoàn thiện bản thân và tiến bộ trong học tập.", isCorrect: true },
          { id: '29c', label: 'c', text: "Việc quan tâm đến người khác gây lãng phí thời gian của bản thân và tạo cho người khác sự dựa dẫm, ỷ lại.", isCorrect: false },
          { id: '29d', label: 'd', text: "Mỗi học sinh cần có những lời nói, việc làm quan tâm đến bạn bè và khích lệ các bạn khác cùng tham gia giúp đỡ những người gặp khó khăn.", isCorrect: true }
        ],
        explanation: "Giảng bài cho bạn giúp chính mình ôn tập kiến thức sâu hơn, đồng thời giúp bạn tự lực chứ không hề tạo ra sự ỷ lại (ý c sai)."
      },
      {
        id: 30, part: 2, type: 'multiple-tf',
        title: "Đọc thông tin và xác định tính Đúng/Sai của các nhận định:",
        scenario: "Bạn M có người thân không may mắc bệnh hiểm nghèo nên tâm trạng thường xuyên buồn phiền, lo lắng. Trong buổi sinh hoạt lớp, bạn H đã chủ động đề xuất với cả lớp gửi những lời động viên tinh thần đến gia đình M, đồng thời cùng các bạn phân công nhau giúp M ghi chép bài đầy đủ những ngày M phải nghỉ học vào viện chăm sóc người thân.",
        statements: [
          { id: '30a', label: 'a', text: "Động viên và chép bài giúp bạn M là biểu hiện của sự quan tâm, cảm thông và chia sẻ.", isCorrect: true },
          { id: '30b', label: 'b', text: "Sự cảm thông, chia sẻ từ bạn bè giúp M có thêm điểm tựa tinh thần để vượt qua giai đoạn khó khăn.", isCorrect: true },
          { id: '30c', label: 'c', text: "Việc lan tỏa sự quan tâm trong tập thể lớp giúp tạo ra môi trường giáo dục thân thiện.", isCorrect: true },
          { id: '30d', label: 'd', text: "Việc H đề xuất cả lớp cùng hỗ trợ bạn M là hành vi can thiệp quá sâu vào chuyện riêng tư của người khác.", isCorrect: false }
        ],
        explanation: "Đề xuất lớp cùng động viên, chép bài giúp bạn là nghĩa cử tương thân tương ái đẹp, không phải can thiệp tiêu cực vào đời tư (ý d sai)."
      },
      {
        id: 31, part: 2, type: 'multiple-tf',
        title: "Đọc thông tin và xác định tính Đúng/Sai của các nhận định:",
        scenario: "Trong giờ học nhóm môn GDCD, bạn Q được phân công làm nhóm trưởng. Thấy một số bạn trong nhóm tỏ ra thụ động, ngại phát biểu và chỉ chờ đợi đáp án từ nhóm trưởng, Q đã phân chia nhiệm vụ cụ thể cho từng thành viên. Khi thấy bạn B vẫn loay hoay không biết làm, Q đã trực tiếp hướng dẫn phương pháp tra cứu tài liệu và động viên B tự tin hoàn thành phần việc được giao.",
        statements: [
          { id: '31a', label: 'a', text: "Việc Q chủ động phân công công việc và hướng dẫn bạn tra cứu thông tin là biểu hiện của tinh thần học tập tự giác, tích cực.", isCorrect: true },
          { id: '31b', label: 'b', text: "Học tập tự giác, tích cực chỉ giúp học sinh mở rộng kiến thức chứ không thể trang bị các kỹ năng mềm.", isCorrect: false },
          { id: '31c', label: 'c', text: "Thói quen tự giác học tập giúp mỗi cá nhân nhận được sự tin tưởng, yêu quý từ thầy cô, bạn bè và tự tin hơn trong cuộc sống.", isCorrect: true },
          { id: '31d', label: 'd', text: "Việc bạn Q hướng dẫn và động viên bạn B khắc phục tính thụ động trong học tập là hành động có trách nhiệm.", isCorrect: true }
        ],
        explanation: "Học tập tự giác giúp phát triển vượt trội các kỹ năng mềm như tư duy phản biện, kỹ năng làm việc nhóm và giao tiếp (ý b sai)."
      },
      {
        id: 32, part: 2, type: 'multiple-tf',
        title: "Đọc thông tin và xác định tính Đúng/Sai của các nhận định:",
        scenario: "Bạn H là học sinh giỏi nhưng gần đây bắt đầu chủ quan, thường xuyên không làm bài tập về nhà với lý do \"Kiến thức lớp 9 quá dễ, không cần học trước\". Trong giờ ra chơi, bạn K - Lớp phó học tập đã nhẹ nhàng góp ý riêng với H và khuyên H nên tập trung chuẩn bị bài kỹ hơn để duy trì phong độ. Nghe K khuyên, H đã nhận ra thiếu sót, nghiêm túc chỉnh đốn lại lịch tự học và tích cực phát biểu xây dựng bài trở lại.",
        statements: [
          { id: '32a', label: 'a', text: "Thái độ chủ quan, bỏ qua việc làm bài tập về nhà của H là biểu hiện của sự thiếu tự giác, thụ động trong học tập.", isCorrect: true },
          { id: '32b', label: 'b', text: "Trong thời đại công nghệ số học sinh không cần dành thời gian tự duy vì đã có các phần mềm hỗ trợ.", isCorrect: false },
          { id: '32c', label: 'c', text: "Việc tự giác học tập giúp học sinh phát triển năng lực tự học suốt đời, tạo tiền đề vững chắc cho sự nghiệp tương lai.", isCorrect: true },
          { id: '32d', label: 'd', text: "Hành động góp ý riêng của K thể hiện sự khéo léo trong việc nhắc nhở bạn bè để cùng tiến bộ.", isCorrect: true }
        ],
        explanation: "Công nghệ chỉ là công cụ bổ trợ; học sinh phải tự mình rèn luyện tư duy mới có thể phát triển trí tuệ thật sự (ý b sai)."
      }
    ];

    const RAW_ESSAYS = [
      {
        id: 'tl-1', num: "Câu 1",
        question: "Em hãy giải thích vì sao trong môi trường học đường, các bạn học sinh cần phải biết quan tâm, cảm thông và chia sẻ với nhau?",
        answer: `
          <p>Học sinh cần biết quan tâm, cảm thông và chia sẻ với nhau vì:</p>
          <ul>
            <li><strong>Gắn kết tình bạn:</strong> Xây dựng mối quan hệ bạn bè đoàn kết, gắn bó, chân thành và tin cậy lẫn nhau.</li>
            <li><strong>Môi trường học tập hạnh phúc:</strong> Tạo không khí học đường vui vẻ, an toàn, giúp giảm bớt căng thẳng và áp lực bài vở.</li>
            <li><strong>Giúp đỡ cùng tiến bộ:</strong> Giúp các bạn có hoàn cảnh khó khăn hoặc học lực yếu hơn có thêm động lực vươn lên.</li>
          </ul>
        `
      },
      {
        id: 'tl-2', num: "Câu 2",
        question: "Em hãy giải thích tại sao khi thấy người khác gặp khó khăn, hoạn nạn, chúng ta không nên thờ ơ, lạnh lùng mà cần phải thể hiện sự quan tâm, cảm thông và chia sẻ kịp thời?",
        answer: `
          <p>Chúng ta cần quan tâm, sẻ chia kịp thời vì:</p>
          <ul>
            <li><strong>Tiếp thêm niềm tin:</strong> Là nguồn động viên tinh thần to lớn giúp người hoạn nạn vơi bớt nỗi đau, xua tan cảm giác đơn độc để vượt qua nghịch cảnh.</li>
            <li><strong>Cứu giúp kịp thời:</strong> Hạn chế thiệt hại về vật chất, sức khỏe và tính mạng của người bị nạn lúc nguy nan.</li>
            <li><strong>Đẩy lùi bệnh vô cảm:</strong> Góp phần gắn kết cộng đồng, xây dựng một xã hội văn minh, nhân ái.</li>
          </ul>
        `
      },
      {
        id: 'tl-3', num: "Câu 3",
        question: "Địa phương nơi A sinh sống có làng nghề truyền thống làm nón lá lâu đời. Tuy nhiên làng nghề đang dần mai một. Nghỉ hè, đoàn thanh niên phát động chiến dịch 'Em yêu làng nghề truyền thống' (học làm nón, quay video quảng bá...). A rất muốn tham gia nhưng bố mẹ lại khuyên A nên tập trung hoàn toàn vào học văn hóa.",
        subQuestions: [
          {
            part: "a. Nếu là A, em sẽ ứng xử như thế nào để vừa vâng lời bố mẹ, vừa thể hiện trách nhiệm với quê hương?",
            hint: "Lễ phép, khéo léo giải thích cho bố mẹ hiểu: Hoạt động vào dịp hè không làm ảnh hưởng đến học tập mà giúp rèn luyện kỹ năng sống, mở mang kiến thức. Chủ động lập thời gian biểu học tập chu đáo, hoàn thành bài vở trước khi tham gia hoạt động làng nghề."
          },
          {
            part: "b. Bản thân em cần làm gì (hai việc làm) để giữ gìn và phát huy truyền thống quê hương?",
            hint: "1) Chủ động tìm hiểu lịch sử, ý nghĩa chiếc nón lá quê hương.<br>2) Dùng mạng xã hội quay video ngắn, viết bài quảng bá nét đẹp làng nón lá tới bạn bè."
          }
        ]
      },
      {
        id: 'tl-4', num: "Câu 4",
        question: "Địa phương của B có một loại bánh dân gian truyền thống nổi tiếng. Tuy nhiên gần đây một số hộ gia đình đã thay đổi nguyên liệu kém chất lượng, dùng phẩm màu hóa học thay cho màu lá tự nhiên để kiếm lời. B cảm thấy rất trăn trở.",
        subQuestions: [
          {
            part: "a. Nếu là B, em sẽ làm gì để thể hiện sự phê phán và góp phần giữ gìn truyền thống?",
            hint: "Kiên quyết từ chối ủng hộ cơ sở gian dối; khuyên gia đình chỉ chọn nơi làm bánh uy tín. Nhẹ nhàng giải thích tác hại của phẩm màu độc hại tới sức khỏe và uy tín lâu đời của làng. Học hỏi nghệ nhân công thức làm bánh sạch tự nhiên."
          },
          {
            part: "b. Bản thân em cần làm gì (hai việc làm) để giữ gìn và phát huy truyền thống quê hương?",
            hint: "1) Tuyên truyền vận động người dân giữ chữ Tín, không vì lợi nhuận làm mất uy tín làng nghề.<br>2) Giới thiệu ẩm thực truyền thống sạch của quê nhà với bạn bè trong các buổi ngoại khóa."
          }
        ]
      }
    ];

    /* ==========================================================================
       2. SINGLE COLUMN MOBILE FIRST CONTROLLER
       ========================================================================== */
    class MobileQuizReview {
      constructor() {
        this.questions = [];
        this.userAnswers = {}; // { qId: key } or { qId_stmtId: bool }
        this.flagged = new Set();
        this.filter = 'all';

        this.init();
      }

      init() {
        this.loadQuestions(true); // Default start with shuffle
        this.bindEvents();
        this.render();
      }

      shuffle(arr) {
        const copy = [...arr];
        for (let i = copy.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy;
      }

      loadQuestions(doShuffle = true) {
        let list = JSON.parse(JSON.stringify(RAW_QUESTIONS));

        if (doShuffle) {
          // Shuffle Questions
          list = this.shuffle(list);
          // Shuffle Options inside each single-choice question
          list = list.map(q => {
            if (q.type === 'single' && Array.isArray(q.options)) {
              const shuffledOpts = this.shuffle(q.options);
              const letters = ['A', 'B', 'C', 'D'];
              q.options = shuffledOpts.map((opt, i) => ({
                ...opt,
                key: letters[i] || opt.key
              }));
            }
            return q;
          });
        }

        this.questions = list;
        this.userAnswers = {};
        this.updateStats();
      }

      bindEvents() {
        // Theme toggle
        document.getElementById('themeToggle').addEventListener('click', () => {
          const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
          document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
        });

        // Tabs
        document.querySelectorAll('.tab-item').forEach(btn => {
          btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-item').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            this.filter = btn.dataset.filter;
            this.render();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          });
        });

        // Shuffle All
        document.getElementById('btnShuffleAll').addEventListener('click', () => {
          this.loadQuestions(true);
          this.render();
          this.showToast("Đã đảo thứ tự 32 câu và các đáp án A, B, C, D!");
        });

        // Reset All
        document.getElementById('btnResetAll').addEventListener('click', () => {
          if (confirm("Làm lại tất cả câu hỏi ôn tập?")) {
            this.userAnswers = {};
            this.render();
            this.showToast("Đã làm mới dữ liệu ôn tập!");
          }
        });

        // Restore original
        document.getElementById('btnRestoreOriginal').addEventListener('click', () => {
          this.questions = JSON.parse(JSON.stringify(RAW_QUESTIONS));
          this.userAnswers = {};
          this.render();
          this.showToast("Đã phục hồi đúng thứ tự gốc theo đề cương giấy!");
        });

        // Drawer
        document.getElementById('btnOpenGrid').addEventListener('click', () => {
          this.renderDrawerGrid();
          document.getElementById('gridDrawer').classList.add('active');
        });

        document.getElementById('btnCloseDrawer').addEventListener('click', () => {
          document.getElementById('gridDrawer').classList.remove('active');
        });

        document.getElementById('gridDrawer').addEventListener('click', (e) => {
          if (e.target.id === 'gridDrawer') {
            document.getElementById('gridDrawer').classList.remove('active');
          }
        });
      }

      showToast(text) {
        const toast = document.getElementById('toastMessage');
        toast.textContent = text;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2400);
      }

      selectOption(qId, key) {
        this.userAnswers[qId] = key;
        this.updateQuestionCard(qId);
        this.updateStats();
      }

      selectTF(qId, stmtId, val) {
        this.userAnswers[`${qId}_${stmtId}`] = val;
        this.updateQuestionCard(qId);
        this.updateStats();
      }

      toggleBookmark(qId) {
        if (this.flagged.has(qId)) {
          this.flagged.delete(qId);
        } else {
          this.flagged.add(qId);
        }
        const card = document.getElementById(`card-${qId}`);
        if (card) {
          const btn = card.querySelector('.btn-bookmark');
          if (btn) btn.classList.toggle('active', this.flagged.has(qId));
        }
      }

      updateStats() {
        let completed = 0;
        let correct = 0;
        let wrong = 0;

        this.questions.forEach(q => {
          if (q.type === 'single') {
            const ans = this.userAnswers[q.id];
            if (ans) {
              completed++;
              const isRight = q.options.find(o => o.key === ans)?.isCorrect;
              if (isRight) correct++; else wrong++;
            }
          } else if (q.type === 'multiple-tf') {
            const answeredStmts = q.statements.filter(s => this.userAnswers[`${q.id}_${s.id}`] !== undefined);
            if (answeredStmts.length === q.statements.length) {
              completed++;
              const allRight = q.statements.every(s => this.userAnswers[`${q.id}_${s.id}`] === s.isCorrect);
              if (allRight) correct++; else wrong++;
            }
          }
        });

        const total = this.questions.length;
        document.getElementById('statCompleted').textContent = `${completed}/${total}`;
        document.getElementById('statCorrect').textContent = correct;
        document.getElementById('statWrong').textContent = wrong;

        const pct = completed > 0 ? Math.round((correct / completed) * 100) : 0;
        document.getElementById('statPercentage').textContent = `${pct}%`;

        const progressPct = Math.round((completed / total) * 100);
        document.getElementById('progressBar').style.width = `${progressPct}%`;
      }

      render() {
        const qContainer = document.getElementById('questionsStream');
        const essayContainer = document.getElementById('essayStream');

        if (this.filter === 'part3') {
          qContainer.style.display = 'none';
          essayContainer.style.display = 'flex';
          this.renderEssays();
          return;
        }

        qContainer.style.display = 'flex';
        essayContainer.style.display = 'none';

        let list = this.questions;
        if (this.filter === 'part1') list = this.questions.filter(q => q.part === 1);
        if (this.filter === 'part2') list = this.questions.filter(q => q.part === 2);

        qContainer.innerHTML = list.map((q, idx) => this.generateCardHTML(q, idx + 1)).join('');
        this.updateStats();
      }

      updateQuestionCard(qId) {
        const q = this.questions.find(x => x.id === qId);
        if (!q) return;
        const card = document.getElementById(`card-${qId}`);
        if (!card) return;
        const curIdx = card.querySelector('.q-num-tag')?.dataset?.index || q.id;
        card.outerHTML = this.generateCardHTML(q, curIdx);
      }

      generateCardHTML(q, displayIdx) {
        const isFlag = this.flagged.has(q.id);

        let bodyHTML = '';
        let hasAnswered = false;

        if (q.type === 'single') {
          const userChoice = this.userAnswers[q.id];
          hasAnswered = !!userChoice;

          bodyHTML = `
            <div class="options-col">
              ${q.options.map(opt => {
                let classes = 'opt-btn';
                let icon = '';

                if (hasAnswered) {
                  if (opt.isCorrect) {
                    classes += ' is-correct';
                    icon = `<span class="opt-feedback-icon" style="color: var(--success);">✓</span>`;
                  } else if (userChoice === opt.key && !opt.isCorrect) {
                    classes += ' is-wrong';
                    icon = `<span class="opt-feedback-icon" style="color: var(--error);">✗</span>`;
                  }
                }

                return `
                  <div class="${classes}" onclick="app.selectOption(${q.id}, '${opt.key}')">
                    <div class="opt-letter">${opt.key}</div>
                    <div class="opt-content">${opt.text}</div>
                    ${icon}
                  </div>
                `;
              }).join('')}
            </div>
          `;
        } else if (q.type === 'multiple-tf') {
          const answeredCount = q.statements.filter(s => this.userAnswers[`${q.id}_${s.id}`] !== undefined).length;
          hasAnswered = answeredCount > 0;

          bodyHTML = `
            ${q.scenario ? `<div class="q-scenario-box"><strong>Tình huống:</strong> ${q.scenario}</div>` : ''}
            <div class="tf-statements-list">
              ${q.statements.map(stmt => {
                const userVal = this.userAnswers[`${q.id}_${stmt.id}`];
                const answered = userVal !== undefined;

                let tClasses = 'tf-btn';
                let fClasses = 'tf-btn';

                if (answered) {
                  if (stmt.isCorrect === true) tClasses += ' correct-choice';
                  else fClasses += ' correct-choice';

                  if (userVal === true && !stmt.isCorrect) tClasses += ' wrong-choice';
                  if (userVal === false && stmt.isCorrect) fClasses += ' wrong-choice';
                }

                return `
                  <div class="tf-item">
                    <div class="tf-text"><strong>${stmt.label}.</strong> ${stmt.text}</div>
                    <div class="tf-choice-row">
                      <button class="${tClasses}" onclick="app.selectTF(${q.id}, '${stmt.id}', true)">
                        Đúng (Đ) ${answered && stmt.isCorrect === true ? '✓' : ''}
                      </button>
                      <button class="${fClasses}" onclick="app.selectTF(${q.id}, '${stmt.id}', false)">
                        Sai (S) ${answered && stmt.isCorrect === false ? '✓' : ''}
                      </button>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          `;
        }

        return `
          <div class="q-card" id="card-${q.id}">
            <div class="q-top">
              <div class="q-badge-group">
                <span class="q-num-tag" data-index="${displayIdx}">Câu ${displayIdx}</span>
                <span class="q-type-tag">${q.type === 'single' ? '4 Lựa chọn' : 'Đúng / Sai'}</span>
              </div>
              <button class="btn-bookmark ${isFlag ? 'active' : ''}" onclick="app.toggleBookmark(${q.id})" title="Đánh dấu câu này">
                ${isFlag ? '★' : '☆'}
              </button>
            </div>

            <div class="q-text">${q.title}</div>
            ${bodyHTML}

            <div class="explanation-panel ${hasAnswered ? 'visible' : ''}">
              <strong>💡 Giải thích chi tiết:</strong>
              ${q.explanation}
            </div>
          </div>
        `;
      }

      renderEssays() {
        const stream = document.getElementById('essayStream');
        stream.innerHTML = RAW_ESSAYS.map(e => `
          <div class="essay-card">
            <div class="essay-card-header">
              <span class="essay-tag">${e.num}</span>
              <div class="essay-title">${e.question}</div>
            </div>

            <button class="essay-hint-btn" onclick="this.nextElementSibling.classList.toggle('open')">
              📖 Xem gợi ý đáp án chi tiết
            </button>
            <div class="essay-answer-box">
              ${e.answer || ''}
              ${e.subQuestions ? e.subQuestions.map(sq => `
                <div style="margin-top: 0.6rem; padding-top: 0.6rem; border-top: 1px dashed var(--border);">
                  <strong style="color: var(--text);">${sq.part}</strong>
                  <div style="margin-top: 0.25rem;">${sq.hint}</div>
                </div>
              `).join('') : ''}
            </div>
          </div>
        `).join('');
      }

      renderDrawerGrid() {
        const grid = document.getElementById('drawerGrid');
        grid.innerHTML = this.questions.map((q, i) => {
          let classes = 'grid-cell';
          if (this.flagged.has(q.id)) classes += ' cell-flagged';

          if (q.type === 'single') {
            const ans = this.userAnswers[q.id];
            if (ans) {
              const isRight = q.options.find(o => o.key === ans)?.isCorrect;
              classes += isRight ? ' cell-correct' : ' cell-wrong';
            }
          } else if (q.type === 'multiple-tf') {
            const answeredCount = q.statements.filter(s => this.userAnswers[`${q.id}_${s.id}`] !== undefined).length;
            if (answeredCount === q.statements.length) {
              const allRight = q.statements.every(s => this.userAnswers[`${q.id}_${s.id}`] === s.isCorrect);
              classes += allRight ? ' cell-correct' : ' cell-wrong';
            } else if (answeredCount > 0) {
              classes += ' cell-partial';
            }
          }

          return `
            <button class="${classes}" onclick="app.jumpToQuestion(${q.id})">
              ${i + 1}
            </button>
          `;
        }).join('');
      }

      jumpToQuestion(qId) {
        document.getElementById('gridDrawer').classList.remove('active');
        if (this.filter === 'part3') {
          document.querySelectorAll('.tab-item').forEach(b => b.classList.remove('active'));
          document.querySelector('.tab-item[data-filter="all"]').classList.add('active');
          this.filter = 'all';
          this.render();
        }

        setTimeout(() => {
          const el = document.getElementById(`card-${qId}`);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            el.style.borderColor = 'var(--primary)';
            setTimeout(() => el.style.borderColor = '', 1200);
          }
        }, 80);
      }
    }

    let app;
    window.addEventListener('DOMContentLoaded', () => {
      app = new MobileQuizReview();
    });