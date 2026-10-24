/* ==========================================================================
   1. RAW DATA DEFINITIONS FROM CONGDAN OUTLINE (PAGES 1 - 6)
   ========================================================================== */
const RAW_QUESTIONS = [
  // --- PHẦN I: TRẮC NGHIỆM NHIỀU LỰA CHỌN (1 - 24) ---
  {
    id: 1,
    part: 1,
    type: 'single',
    title: "Truyền thống đánh giặc giữ nước của dân tộc ta được thể hiện qua tinh thần nào?",
    options: [
      { key: 'A', text: "Tinh thần đoàn kết, tương thân tương ái.", isCorrect: false },
      { key: 'B', text: "Tinh thần nồng nàn yêu nước, sẵn sàng xả thân vì độc lập.", isCorrect: true },
      { key: 'C', text: "Chờ đợi sự giúp đỡ, viện trợ hoàn toàn từ bên ngoài.", isCorrect: false },
      { key: 'D', text: "Thỏa hiệp, nhượng bộ lãnh thổ khi gặp kẻ thù mạnh.", isCorrect: false }
    ],
    explanation: "Tinh thần nồng nàn yêu nước, sẵn sàng xả thân vì độc lập là nét đẹp truyền thống cốt lõi và vẻ vang nhất trong lịch sử dựng nước và giữ nước của dân tộc Việt Nam."
  },
  {
    id: 2,
    part: 1,
    type: 'single',
    title: "Việc làm phụng dưỡng Mẹ Việt Nam Anh hùng ở địa phương thể hiện truyền thống nào?",
    options: [
      { key: 'A', text: "Tương thân tương ái.", isCorrect: false },
      { key: 'B', text: "Tôn sư trọng đạo.", isCorrect: false },
      { key: 'C', text: "Uống nước nhớ nguồn.", isCorrect: true },
      { key: 'D', text: "Cần cù, sáng tạo trong lao động.", isCorrect: false }
    ],
    explanation: "Phụng dưỡng và chăm sóc Mẹ Việt Nam Anh hùng thể hiện lòng biết ơn sâu sắc đối với những người mẹ đã hy sinh chồng con cho độc lập dân tộc - truyền thống 'Uống nước nhớ nguồn'."
  },
  {
    id: 3,
    part: 1,
    type: 'single',
    title: "Biểu hiện của một người biết quan tâm đến cảm xúc của người khác trong giao tiếp là",
    options: [
      { key: 'A', text: "nói những lời châm chọc khuyết điểm của người khác.", isCorrect: false },
      { key: 'B', text: "chọn lời lẽ tế nhị để không làm tổn thương người nghe.", isCorrect: true },
      { key: 'C', text: "luôn áp đặt suy nghĩ của mình lên người khác.", isCorrect: false },
      { key: 'D', text: "cố chấp tranh cãi đến cùng dù biết mình sai.", isCorrect: false }
    ],
    explanation: "Giao tiếp tế nhị, nhã nhặn, biết lắng nghe và tôn trọng cảm xúc của người đối diện là biểu hiện của sự quan tâm, thấu cảm văn minh."
  },
  {
    id: 4,
    part: 1,
    type: 'single',
    title: "Loại hình nghệ thuật truyền thống nào gắn liền với đời sống sinh hoạt văn hóa của người dân vùng đồng bằng Bắc Bộ?",
    options: [
      { key: 'A', text: "Múa rối nước.", isCorrect: true },
      { key: 'B', text: "Đờn ca tài tử.", isCorrect: false },
      { key: 'C', text: "Hát Cải lương.", isCorrect: false },
      { key: 'D', text: "Hát Bài chòi.", isCorrect: false }
    ],
    explanation: "Múa rối nước là nét nghệ thuật dân gian độc đáo của nền văn minh lúa nước sông Hồng ở đồng bằng Bắc Bộ (Đờn ca tài tử, Cải lương ở miền Nam; Bài chòi ở miền Trung)."
  },
  {
    id: 5,
    part: 1,
    type: 'single',
    title: "Hành vi thể hiện sự thiếu quan tâm và vô cảm với người xung quanh",
    options: [
      { key: 'A', text: "nhường chỗ ngồi trên xe buýt cho người cao tuổi, phụ nữ mang thai.", isCorrect: false },
      { key: 'B', text: "thăm hỏi thầy cô giáo cũ nhân ngày Nhà giáo Việt Nam.", isCorrect: false },
      { key: 'C', text: "bàng quan, dửng dưng trước những khó khăn của người khác.", isCorrect: true },
      { key: 'D', text: "tích cực tham gia các hoạt động thiện nguyện ở địa phương.", isCorrect: false }
    ],
    explanation: "Bàng quan, dửng dưng, thờ ơ trước nỗi đau và khó khăn của người khác là biểu hiện rõ nét của lối sống vô cảm, ích kỷ."
  },
  {
    id: 6,
    part: 1,
    type: 'single',
    title: "Hành vi nào là biểu hiện của sự tự giác trong học tập?",
    options: [
      { key: 'A', text: "Chỉ làm bài tập khi bị cha mẹ nhắc nhở, đôn đốc.", isCorrect: false },
      { key: 'B', text: "Chủ động lập kế hoạch học tập và tự giác hoàn thành đúng hạn.", isCorrect: true },
      { key: 'C', text: "Chờ đến sát giờ kiểm tra mới mở sách vở ra học qua loa.", isCorrect: false },
      { key: 'D', text: "Sao chép bài giải của bạn để nộp cho xong nhiệm vụ.", isCorrect: false }
    ],
    explanation: "Chủ động xây dựng kế hoạch và nghiêm túc thực hiện bài vở đúng hạn mà không cần chờ ai đôn đốc chính là biểu hiện chuẩn mực của tính tự giác."
  },
  {
    id: 7,
    part: 1,
    type: 'single',
    title: "Hành động nào thể hiện sự chia sẻ vật chất với người khó khăn?",
    options: [
      { key: 'A', text: "Dùng điện thoại quay phim khi thấy người gặp nạn trên đường.", isCorrect: false },
      { key: 'B', text: "Góp một phần quần áo cũ, sách vở để ủng hộ học sinh vùng cao.", isCorrect: true },
      { key: 'C', text: "Chê bai những món quà từ thiện có giá trị nhỏ.", isCorrect: false },
      { key: 'D', text: "Giữ lại tất cả vật dụng không dùng đến thay vì đem cho.", isCorrect: false }
    ],
    explanation: "Quyên góp quần áo, sách vở, tập viết và đồ dùng thiết yếu là hành động chia sẻ về mặt vật chất giàu ý nghĩa nhân đạo."
  },
  {
    id: 8,
    part: 1,
    type: 'single',
    title: "Biểu hiện nào cho thấy một người biết lắng nghe và chia sẻ tinh thần?",
    options: [
      { key: 'A', text: "Cắt ngang lời khi người khác đang tâm sự để nói về chuyện của mình.", isCorrect: false },
      { key: 'B', text: "Lướt điện thoại trong khi người khác đang nói chuyện với mình.", isCorrect: false },
      { key: 'C', text: "Lắng nghe nhưng không chú tâm vì chẳng phải chuyện của mình.", isCorrect: false },
      { key: 'D', text: "Chăm chú lắng nghe, gật đầu đồng cảm và đưa ra lời khuyên chân thành.", isCorrect: true }
    ],
    explanation: "Chăm chú lắng nghe, gật đầu thấu hiểu và đưa ra lời khuyên chân thành là sự sẻ chia tinh thần ấm áp nhất dành cho người đang gặp khó khăn."
  },
  {
    id: 9,
    part: 1,
    type: 'single',
    title: "Hành vi nào thể hiện sự chia sẻ kinh nghiệm, kiến thức cho bạn bè?",
    options: [
      { key: 'A', text: "Giấu tài liệu học tập, không chỉ bài cho ai vì sợ bạn vượt qua mình.", isCorrect: false },
      { key: 'B', text: "Sẵn sàng giảng giải bài tập khó khi bạn chưa hiểu bài.", isCorrect: true },
      { key: 'C', text: "Cố tình chỉ sai kiến thức để bạn làm bài kiểm tra kém điểm.", isCorrect: false },
      { key: 'D', text: "Tự học một mình và không bao giờ thảo luận nhóm.", isCorrect: false }
    ],
    explanation: "Nhiệt tình hướng dẫn và giảng lại bài cho bạn chưa hiểu giúp củng cố kiến thức cho bản thân đồng thời thắt chặt tình bạn cùng tiến bộ."
  },
  {
    id: 10,
    part: 1,
    type: 'single',
    title: "Việc làm thể hiện tinh thần tự học và tìm tòi kiến thức ngoài giờ học là",
    options: [
      { key: 'A', text: "tìm kiếm thêm tài liệu, đọc sách tham khảo để mở rộng hiểu biết.", isCorrect: true },
      { key: 'B', text: "học đúng những nội dung được ghi chép trên lớp.", isCorrect: false },
      { key: 'C', text: "bỏ qua những bài tập khó và chờ thầy cô sửa bài trên lớp.", isCorrect: false },
      { key: 'D', text: "từ chối tham gia các buổi thảo luận nhóm vì tốn thời gian.", isCorrect: false }
    ],
    explanation: "Chủ động tìm kiếm tài liệu mở rộng, đọc thêm sách tham khảo nâng cao thể hiện ý thức đam mê học hỏi và tự nâng cao trình độ ngoài giờ lên lớp."
  },
  {
    id: 11,
    part: 1,
    type: 'single',
    title: "Hành vi nào thể hiện sự quan tâm đến người khác?",
    options: [
      { key: 'A', text: "Lơ đễnh, phớt lờ khi bạn bè đang gặp chuyện buồn.", isCorrect: false },
      { key: 'B', text: "Hỏi thăm, động viên khi thấy bạn có vẻ mệt mỏi, lo lắng.", isCorrect: true },
      { key: 'C', text: "Cười chê khi bạn làm sai một việc nhỏ.", isCorrect: false },
      { key: 'D', text: "Chỉ quan tâm đến công việc và cảm xúc của riêng mình.", isCorrect: false }
    ],
    explanation: "Nhận biết vẻ mệt mỏi, lo âu của bạn để kịp thời hỏi han, động viên là hành động quan tâm tinh tế và chân thành."
  },
  {
    id: 12,
    part: 1,
    type: 'single',
    title: "Hành vi nào không phải là biểu hiện của người học tập tự giác, tích cực?",
    options: [
      { key: 'A', text: "Luôn chuẩn bị đầy đủ sách vở, đồ dùng học tập trước khi đến trường.", isCorrect: false },
      { key: 'B', text: "Biết tự rút kinh nghiệm và sửa chữa những sai sót sau mỗi bài kiểm tra.", isCorrect: false },
      { key: 'C', text: "Chỉ học khi có áp lực từ điểm số hoặc sự giám sát của người lớn.", isCorrect: true },
      { key: 'D', text: "Chủ động trao đổi, hỏi thầy cô và bạn bè những phần kiến thức chưa hiểu.", isCorrect: false }
    ],
    explanation: "Chỉ học khi bị ép buộc, sợ phạt điểm hoặc có người theo dõi là thái độ học tập đối phó, hoàn toàn thiếu tính tự giác."
  },
  {
    id: 13,
    part: 1,
    type: 'single',
    title: "Truyền thống nhân nghĩa của dân tộc ta được thể hiện qua tinh thần",
    options: [
      { key: 'A', text: "tương thân tương ái.", isCorrect: true },
      { key: 'B', text: "yêu nước nồng nàn.", isCorrect: false },
      { key: 'C', text: "kiên trung, bất khuất.", isCorrect: false },
      { key: 'D', text: "đại đoàn kết.", isCorrect: false }
    ],
    explanation: "Truyền thống nhân nghĩa bắt nguồn từ đạo lý thương người như thể thương thân, thể hiện rõ nhất qua tinh thần tương thân tương ái, cưu mang giúp đỡ nhau."
  },
  {
    id: 14,
    part: 1,
    type: 'single',
    title: "Việc tự giác kiểm tra lại bài làm và tự sửa chữa các lỗi sai sau khi nhận lại bài kiểm tra thể hiện thái độ",
    options: [
      { key: 'A', text: "học tập vì muốn phô trương thành tích.", isCorrect: false },
      { key: 'B', text: "nghiêm túc và có trách nhiệm với kết quả học tập.", isCorrect: true },
      { key: 'C', text: "học tập mang tính chống đối, phó mặc.", isCorrect: false },
      { key: 'D', text: "đề cao vẻ điểm số trong học tập.", isCorrect: false }
    ],
    explanation: "Kiểm tra và sửa lại câu sai giúp học sinh nhận ra lỗ hổng kiến thức, phản ánh tinh thần trung thực, cầu tiến và có trách nhiệm với việc học."
  },
  {
    id: 15,
    part: 1,
    type: 'single',
    title: "Việc làm nào thể hiện tinh thần sẻ chia với cộng đồng?",
    options: [
      { key: 'A', text: "Xả rác bừa bãi ra nơi công cộng vì có lao công dọn dẹp.", isCorrect: false },
      { key: 'B', text: "Tham gia chiến dịch tình nguyện \"Chủ nhật xanh\".", isCorrect: true },
      { key: 'C', text: "Gây gổ, mất trật tự ở nơi tập trung đông người.", isCorrect: false },
      { key: 'D', text: "Tiết kiệm điện, nước tại nhà.", isCorrect: false }
    ],
    explanation: "Tham gia 'Chủ nhật xanh' dọn vệ sinh, bảo vệ môi trường công cộng là hành động thiết thực cống hiến và sẻ chia trách nhiệm với cộng đồng xã hội."
  },
  {
    id: 16,
    part: 1,
    type: 'single',
    title: "Hoạt động thăm hỏi gia đình thương binh - bệnh binh ở địa phương thể hiện truyền thống nào?",
    options: [
      { key: 'A', text: "Tương thân tương ái.", isCorrect: false },
      { key: 'B', text: "Tôn sư trọng đạo.", isCorrect: false },
      { key: 'C', text: "Uống nước nhớ nguồn.", isCorrect: true },
      { key: 'D', text: "Cần cù, sáng tạo trong lao động.", isCorrect: false }
    ],
    explanation: "Thăm hỏi thương bệnh binh và gia đình người có công với cách mạng là hành động đền ơn đáp nghĩa, biểu hiện của truyền thống 'Uống nước nhớ nguồn'."
  },
  {
    id: 17,
    part: 1,
    type: 'single',
    title: "Lễ hội truyền thống nào được tổ chức vào ngày 10 tháng 03 âm lịch hằng năm tại Phú Thọ?",
    options: [
      { key: 'A', text: "Lễ hội Chùa Hương.", isCorrect: false },
      { key: 'B', text: "Lễ hội Cầu ngư.", isCorrect: false },
      { key: 'C', text: "Lễ hội Đền Hùng.", isCorrect: true },
      { key: 'D', text: "Lễ hội Gióng.", isCorrect: false }
    ],
    explanation: "'Dù ai đi ngược về xuôi / Nhớ ngày Giỗ Tổ mùng mười tháng ba' - Lễ hội Đền Hùng được tổ chức hằng năm tại núi Nghĩa Lĩnh, tỉnh Phú Thọ."
  },
  {
    id: 18,
    part: 1,
    type: 'single',
    title: "Biểu hiện nào là sự cảm thông với hoàn cảnh của người khác?",
    options: [
      { key: 'A', text: "Đặt mình vào vị trí của người khác để thấu hiểu nỗi buồn của họ.", isCorrect: true },
      { key: 'B', text: "Cho rằng khó khăn của người khác là chuyện bình thường.", isCorrect: false },
      { key: 'C', text: "Xa lánh, kì thị những người có hoàn cảnh bất hạnh.", isCorrect: false },
      { key: 'D', text: "Cười cợt trước những rủi ro mà người khác gặp phải.", isCorrect: false }
    ],
    explanation: "Cảm thông là khả năng thấu suốt bằng trái tim: biết đặt mình vào hoàn cảnh của người khác để cảm nhận và chia sẻ nỗi niềm của họ."
  },
  {
    id: 19,
    part: 1,
    type: 'single',
    title: "Khi gặp bài tập phức tạp, học sinh có tinh thần tự giác, tích cực sẽ",
    options: [
      { key: 'A', text: "bỏ qua ngay lập tức và lý do là do đề quá khó.", isCorrect: false },
      { key: 'B', text: "kiên trì suy nghĩ, tìm hiểu từ kiến thức cũ.", isCorrect: true },
      { key: 'C', text: "chờ đến giờ lên lớp để chép lại đáp án từ bạn bè.", isCorrect: false },
      { key: 'D', text: "than phiền giáo viên giao bài tập khó.", isCorrect: false }
    ],
    explanation: "Người có ý thức học tập tích cực sẽ coi bài khó là cơ hội rèn luyện, kiên trì suy ngẫm, tra cứu lại lý thuyết cũ để tìm hướng giải quyết."
  },
  {
    id: 20,
    part: 1,
    type: 'single',
    title: "Khi thấy một bạn học sinh bị ngã xe đạp trên đường đến trường, hành vi nào thể hiện sự quan tâm, chia sẻ?",
    options: [
      { key: 'A', text: "Đứng lại xem rồi bàn tán cùng đám đông.", isCorrect: false },
      { key: 'B', text: "Nhanh chóng đỡ bạn, kiểm tra vết thương và giúp nhặt đồ.", isCorrect: true },
      { key: 'C', text: "Đi tiếp vì sợ bị muộn học và không liên quan đến mình.", isCorrect: false },
      { key: 'D', text: "Chỉ trỏ và chê bạn vụng về.", isCorrect: false }
    ],
    explanation: "Chủ động chạy tới đỡ bạn dậy, ân cần hỏi han thương tích và giúp nhặt lại đồ đạc rơi vãi là hành động quan tâm, sẻ chia kịp thời và đáng khen."
  },
  {
    id: 21,
    part: 1,
    type: 'single',
    title: "Hành động thể hiện sự quan tâm đối với người thân trong gia đình",
    options: [
      { key: 'A', text: "tự giác làm việc nhà để phụ giúp bố mẹ.", isCorrect: true },
      { key: 'B', text: "đóng cửa phòng và mặc kệ mọi việc trong nhà.", isCorrect: false },
      { key: 'C', text: "chỉ biết đòi hỏi quà cáp và tiền bạc từ gia đình.", isCorrect: false },
      { key: 'D', text: "chỉ học tập khi được bố mẹ nhắc nhở.", isCorrect: false }
    ],
    explanation: "Chủ động chia sẻ gánh nặng gia đình bằng cách làm việc nhà phụ giúp cha mẹ là biểu hiện của người con hiếu thảo và biết quan tâm gia đình."
  },
  {
    id: 22,
    part: 1,
    type: 'single',
    title: "Khi bạn bè gặp điểm kém và đang buồn bã, hành vi nào thể hiện sự cảm thông, chia sẻ?",
    options: [
      { key: 'A', text: "Lớn tiếng chê bai bạn học kém.", isCorrect: false },
      { key: 'B', text: "Động viên và rủ bạn cùng học để cải thiện kết quả.", isCorrect: true },
      { key: 'C', text: "Lảng tránh và không thèm chơi cùng bạn nữa.", isCorrect: false },
      { key: 'D', text: "Cười đùa để trêu chọc bạn.", isCorrect: false }
    ],
    explanation: "Không trêu chọc hay xa lánh mà chân thành động viên và rủ bạn cùng học là sự nâng đỡ tinh thần vô cùng quý báu trong tình bạn."
  },
  {
    id: 23,
    part: 1,
    type: 'single',
    title: "Biểu hiện nào thể hiện sự tích cực, chủ động trong giờ học trên lớp?",
    options: [
      { key: 'A', text: "Ngồi im lặng, không ghi chép bài và lướt điện thoại dưới gầm bàn.", isCorrect: false },
      { key: 'B', text: "Tập trung chú ý nghe giảng, tích cực hăng hái phát biểu xây dựng bài.", isCorrect: true },
      { key: 'C', text: "Làm việc riêng hoặc nói chuyện gây mất trật tự trong giờ học.", isCorrect: false },
      { key: 'D', text: "Thường xuyên học bài và làm bài trước khi đến lớp.", isCorrect: false }
    ],
    explanation: "Tập trung cao độ và hăng hái giơ tay phát biểu ý kiến xây dựng bài trên lớp là biểu hiện rõ nét nhất của sự tích cực, chủ động học tập."
  },
  {
    id: 24,
    part: 1,
    type: 'single',
    title: "Hành động nào không phải là biểu hiện của sự quan tâm, cảm thông và chia sẻ?",
    options: [
      { key: 'A', text: "Chung tay quyên góp tiền hỗ trợ đồng bào bị lũ lụt.", isCorrect: false },
      { key: 'B', text: "Không trung thực khi làm bài kiểm tra.", isCorrect: false },
      { key: 'C', text: "Đố kỵ, ganh ghét khi thấy người khác đạt được thành công.", isCorrect: true },
      { key: 'D', text: "Lắng nghe những tâm tư của người thân khi họ gặp trắc trở.", isCorrect: false }
    ],
    explanation: "Đố kỵ và ganh ghét với thành quả của người khác là thói xấu thể hiện sự hẹp hòi, trái ngược với tinh thần bao dung, cảm thông và sẻ chia."
  },

  // --- PHẦN II: DẠNG TRẮC NGHIỆM ĐÚNG / SAI THEO TÌNH HUỐNG (25 - 32) ---
  {
    id: 25,
    part: 2,
    type: 'multiple-tf',
    title: "Đọc thông tin và xác định tính Đúng/Sai của các nhận định:",
    scenario: "Trong đợt bão lũ nghiêm trọng tràn qua tỉnh miền Trung, gia đình bạn N bị ngập sâu, hư hỏng toàn bộ hoa màu và đồ dùng sinh hoạt. Biết tin, bạn M - Lớp trưởng đã chủ động hỏi thăm, động viên N và đề xuất với cô giáo chủ nhiệm phát động phong trào \"Vòng tay bè bạn\" trong lớp. M vận động các bạn quyên góp để hỗ trợ N vượt qua khó khăn. Ngược lại, bạn B lại nói: \"Nhà bạn ấy nghèo thì phải chịu, việc gì mình phải rước phiền phức vào người\".",
    statements: [
      { id: '25a', label: 'a', text: "Hành động thăm hỏi và vận động quyên góp giúp đỡ N của bạn M là biểu hiện của sự quan tâm, cảm thông và chia sẻ với người khác.", isCorrect: true },
      { id: '25b', label: 'b', text: "Sự quan tâm, cảm thông và chia sẻ giúp người gặp khó khăn có thêm niềm tin, nghị lực để vượt qua biến cố.", isCorrect: true },
      { id: '25c', label: 'c', text: "Việc lan tỏa các hành động chia sẻ trong lớp học giúp củng cố tinh thần đoàn kết.", isCorrect: true },
      { id: '25d', label: 'd', text: "Thái độ của bạn B thể hiện lối sống tự lập, không quan tâm đến chuyện riêng của người khác nên cần được nhân rộng.", isCorrect: false }
    ],
    explanation: "Thái độ của bạn B là thờ ơ, vô cảm trước mất mát của bạn bè chứ không phải là tự lập; lối sống này đáng bị phê phán và không được nhân rộng."
  },
  {
    id: 26,
    part: 2,
    type: 'multiple-tf',
    title: "Đọc thông tin và xác định tính Đúng/Sai của các nhận định:",
    scenario: "Trên đường đi học về, bạn H và T thấy một cụ bà bị ngã xe đạp, rau củ văng tung tóe trên đường. H lập tức dừng xe, chạy lại đỡ cụ bà dậy, dắt xe vào vỉa hè và gom giúp rau củ. Thấy vậy, T đứng trên xe giục: \"Sắp muộn giờ chơi game rồi, kệ người ta đi!\". H không nghe theo T mà còn nhắc T cùng lại hỗ trợ cụ bà, sau đó mới tiếp tục đi về.",
    statements: [
      { id: '26a', label: 'a', text: "Hành động đỡ cụ bà dậy và gom giúp đồ đạc của bạn H là biểu hiện của sự quan tâm, cảm thông và hỗ trợ người khác lúc gặp sự cố.", isCorrect: true },
      { id: '26b', label: 'b', text: "Hỗ trợ kịp thời đối với người gặp tai nạn giúp hạn chế tổn thương và góp phần xây dựng một xã hội an toàn, văn minh.", isCorrect: true },
      { id: '26c', label: 'c', text: "Giúp đỡ người khác khi gặp khó khăn chỉ gây tốn thời gian cá nhân chứ không mang lại bất kỳ giá trị nào cho bản thân người giúp.", isCorrect: false },
      { id: '26d', label: 'd', text: "Bạn H đã thể hiện sự quan tâm, chia sẻ đúng đắn, đồng thời thẳng thắn khích lệ, nhắc nhở bạn T loại bỏ thái độ thờ ơ, vô cảm.", isCorrect: true }
    ],
    explanation: "Giúp đỡ người khác mang lại niềm vui, sự thanh thản trong tâm hồn, bồi dưỡng nhân cách và lan tỏa tình người, không hề vô ích như ý c nhận định."
  },
  {
    id: 27,
    part: 2,
    type: 'multiple-tf',
    title: "Đọc thông tin và xác định tính Đúng/Sai của các nhận định:",
    scenario: "Chuẩn bị cho bài kiểm tra cuối kì, bạn N đã tự lập kế hoạch ôn tập chi tiết cho từng tuần. Không chỉ hoàn thành bài tập giáo viên giao trên lớp, N còn chủ động tìm đọc thêm tài liệu, sách nâng cao và lập nhóm học tập trực tuyến để cùng trao đổi các bài tập khó với bạn bè. Ngược lại, bạn H lại thường xuyên chờ đến sát ngày kiểm tra mới học và tranh thủ chép bài của N trong giờ ra chơi.",
    statements: [
      { id: '27a', label: 'a', text: "Việc N tự lập kế hoạch học tập, chủ động tìm đọc tài liệu và lập nhóm trao đổi kiến thức là biểu hiện của tinh thần học tập tự giác, tích cực.", isCorrect: true },
      { id: '27b', label: 'b', text: "Tinh thần học tập tự giác, tích cực giúp N không ngừng mở rộng tri thức, rèn luyện kỹ năng.", isCorrect: true },
      { id: '27c', label: 'c', text: "Việc chủ động học tập chỉ giúp ích cho kết quả thi cử của cá nhân chứ không có giá trị gì đối với sự phát triển chung của xã hội.", isCorrect: false },
      { id: '27d', label: 'd', text: "Để giữ gìn tình bạn thay vì nhắc nhở hay góp ý, N nên tiếp tục cho H chép bài.", isCorrect: false }
    ],
    explanation: "Học tập tự giác tạo nên nguồn nhân lực chất lượng cho xã hội (c sai). Cho bạn chép bài là dung túng thói lười biếng, làm hại tương lai của bạn (d sai)."
  },
  {
    id: 28,
    part: 2,
    type: 'multiple-tf',
    title: "Đọc thông tin và xác định tính Đúng/Sai của các nhận định:",
    scenario: "Bạn M gặp khó khăn với môn Tiếng Anh. Thay vì chán nản hay bỏ mặc, M đã tự giác dành 1 tiếng mỗi tối để học từ vựng, nghe video bài giảng trên mạng và dán các thẻ từ ghi nhớ xung quanh góc học tập. Thấy bạn A cùng bàn thường xuyên chơi điện tử và không chuẩn bị bài trước khi đến lớp, M đã chân thành góp ý: \"Nếu cậu không tự giác học từ bây giờ thì sẽ mất gốc kiến thức!\" và rủ A cùng học nhóm.",
    statements: [
      { id: '28a', label: 'a', text: "Việc M kiên trì tự học Tiếng Anh hằng ngày và dán thẻ từ ghi nhớ là biểu hiện của sự tự giác, vượt khó trong học tập.", isCorrect: true },
      { id: '28b', label: 'b', text: "Việc học tập tự giác, tích cực giúp M từng bước khắc phục điểm yếu môn học, củng cố niềm tin và ý chí vươn lên.", isCorrect: true },
      { id: '28c', label: 'c', text: "Tự giác học tập đòi hỏi phải học một mình quá nhiều, dễ khiến học sinh trở nên cô lập và khó kết bạn.", isCorrect: false },
      { id: '28d', label: 'd', text: "Hành động rủ bạn cùng học của M thể hiện việc biết giúp bạn bè khắc phục tính lười biếng, thụ động.", isCorrect: true }
    ],
    explanation: "Tự giác học tập có thể kết hợp qua học nhóm, thảo luận bạn bè, giúp tăng cường gắn kết chứ không hề gây cô lập (ý c sai)."
  },
  {
    id: 29,
    part: 2,
    type: 'multiple-tf',
    title: "Đọc thông tin và xác định tính Đúng/Sai của các nhận định:",
    scenario: "Bạn T là học sinh mới chuyển đến lớp 9B. Do hoàn cảnh gia đình khó khăn và còn bỡ ngỡ với môi trường mới, T tỏ ra rụt rè, ít nói và học sút môn Toán. Thấy vậy, bạn N đã chủ động đến ngồi cùng bàn, trò chuyện lắng nghe tâm sự của T và đề xuất lập nhóm \"Đôi bạn cùng tiến\" để giảng lại bài cho T sau giờ học. Nhờ sự giúp đỡ kiên trì của N, T đã tự tin hơn và đạt kết quả cao trong bài kiểm tra giữa kỳ.",
    statements: [
      { id: '29a', label: 'a', text: "Việc N chủ động trò chuyện và giảng bài giúp T là biểu hiện của sự quan tâm, cảm thông và chia sẻ.", isCorrect: true },
      { id: '29b', label: 'b', text: "Sự giúp đỡ chân thành của N giúp T vượt qua rào cản tâm lý, hoàn thiện bản thân và tiến bộ trong học tập.", isCorrect: true },
      { id: '29c', label: 'c', text: "Việc quan tâm đến người khác gây lãng phí thời gian của bản thân và tạo cho người khác sự dựa dẫm, ỷ lại.", isCorrect: false },
      { id: '29d', label: 'd', text: "Mỗi học sinh cần có những lời nói, việc làm quan tâm đến bạn bè và khích lệ các bạn khác cùng tham gia giúp đỡ những người gặp khó khăn.", isCorrect: true }
    ],
    explanation: "Quan tâm đúng cách như bạn N hướng dẫn học bài giúp bạn tự lực vươn lên chứ không tạo sự ỷ lại, đồng thời bản thân N cũng ôn luyện sâu sắc hơn kiến thức (ý c sai)."
  },
  {
    id: 30,
    part: 2,
    type: 'multiple-tf',
    title: "Đọc thông tin và xác định tính Đúng/Sai của các nhận định:",
    scenario: "Bạn M có người thân không may mắc bệnh hiểm nghèo nên tâm trạng thường xuyên buồn phiền, lo lắng. Trong buổi sinh hoạt lớp, bạn H đã chủ động đề xuất với cả lớp gửi những lời động viên tinh thần đến gia đình M, đồng thời cùng các bạn phân công nhau giúp M ghi chép bài đầy đủ những ngày M phải nghỉ học vào viện chăm sóc người thân.",
    statements: [
      { id: '30a', label: 'a', text: "Động viên và chép bài giúp bạn M là biểu hiện của sự quan tâm, cảm thông và chia sẻ.", isCorrect: true },
      { id: '30b', label: 'b', text: "Sự cảm thông, chia sẻ từ bạn bè giúp M có thêm điểm tựa tinh thần để vượt qua giai đoạn khó khăn.", isCorrect: true },
      { id: '30c', label: 'c', text: "Việc lan tỏa sự quan tâm trong tập thể lớp giúp tạo ra môi trường giáo dục thân thiện.", isCorrect: true },
      { id: '30d', label: 'd', text: "Việc H đề xuất cả lớp cùng hỗ trợ bạn M là hành vi can thiệp quá sâu vào chuyện riêng tư của người khác.", isCorrect: false }
    ],
    explanation: "Hành động đề xuất giúp đỡ bạn M thể hiện sự quan tâm đúng đắn, tinh thần nhân văn và tương trợ trong tập thể, không phải là can thiệp tiêu cực vào đời tư (ý d sai)."
  },
  {
    id: 31,
    part: 2,
    type: 'multiple-tf',
    title: "Đọc thông tin và xác định tính Đúng/Sai của các nhận định:",
    scenario: "Trong giờ học nhóm môn GDCD, bạn Q được phân công làm nhóm trưởng. Thấy một số bạn trong nhóm tỏ ra thụ động, ngại phát biểu và chỉ chờ đợi đáp án từ nhóm trưởng, Q đã phân chia nhiệm vụ cụ thể cho từng thành viên. Khi thấy bạn B vẫn loay hoay không biết làm, Q đã trực tiếp hướng dẫn phương pháp tra cứu tài liệu và động viên B tự tin hoàn thành phần việc được giao.",
    statements: [
      { id: '31a', label: 'a', text: "Việc Q chủ động phân công công việc và hướng dẫn bạn tra cứu thông tin là biểu hiện của tinh thần học tập tự giác, tích cực.", isCorrect: true },
      { id: '31b', label: 'b', text: "Học tập tự giác, tích cực chỉ giúp học sinh mở rộng kiến thức chứ không thể trang bị các kỹ năng mềm.", isCorrect: false },
      { id: '31c', label: 'c', text: "Thói quen tự giác học tập giúp mỗi cá nhân nhận được sự tin tưởng, yêu quý từ thầy cô, bạn bè và tự tin hơn trong cuộc sống.", isCorrect: true },
      { id: '31d', label: 'd', text: "Việc bạn Q hướng dẫn và động viên bạn B khắc phục tính thụ động trong học tập là hành động có trách nhiệm.", isCorrect: true }
    ],
    explanation: "Học tập tự giác, tích cực giúp phát triển toàn diện kỹ năng giao tiếp, quản lý thời gian, làm việc nhóm và giải quyết vấn đề (ý b sai)."
  },
  {
    id: 32,
    part: 2,
    type: 'multiple-tf',
    title: "Đọc thông tin và xác định tính Đúng/Sai của các nhận định:",
    scenario: "Bạn H là học sinh giỏi nhưng gần đây bắt đầu chủ quan, thường xuyên không làm bài tập về nhà với lý do \"Kiến thức lớp 9 quá dễ, không cần học trước\". Trong giờ ra chơi, bạn K - Lớp phó học tập đã nhẹ nhàng góp ý riêng với H và khuyên H nên tập trung chuẩn bị bài kỹ hơn để duy trì phong độ. Nghe K khuyên, H đã nhận ra thiếu sót, nghiêm túc chỉnh đốn lại lịch tự học và tích cực phát biểu xây dựng bài trở lại.",
    statements: [
      { id: '32a', label: 'a', text: "Thái độ chủ quan, bỏ qua việc làm bài tập về nhà của H là biểu hiện của sự thiếu tự giác, thụ động trong học tập.", isCorrect: true },
      { id: '32b', label: 'b', text: "Trong thời đại công nghệ số học sinh không cần dành thời gian tự duy vì đã có các phần mềm hỗ trợ.", isCorrect: false },
      { id: '32c', label: 'c', text: "Việc tự giác học tập giúp học sinh phát triển năng lực tự học suốt đời, tạo tiền đề vững chắc cho sự nghiệp tương lai.", isCorrect: true },
      { id: '32d', label: 'd', text: "Hành động góp ý riêng của K thể hiện sự khéo léo trong việc nhắc nhở bạn bè để cùng tiến bộ.", isCorrect: true }
    ],
    explanation: "Phần mềm công nghệ chỉ là công cụ hỗ trợ, học sinh vẫn bắt buộc phải tự tư duy độc lập để phát triển trí tuệ và năng lực cá nhân (ý b sai)."
  }
];

/* ==========================================================================
   2. RAW ESSAY QUESTIONS FROM PAGES 5 & 6
   ========================================================================== */
const RAW_ESSAYS = [
  {
    id: 'tl-1',
    num: "Câu 1",
    question: "Em hãy giải thích vì sao trong môi trường học đường, các bạn học sinh cần phải biết quan tâm, cảm thông và chia sẻ với nhau?",
    answer: `
      <p>Học sinh cần biết quan tâm, cảm thông và chia sẻ với nhau vì:</p>
      <ul>
        <li><strong>Xây dựng tình bạn bền chặt:</strong> Giúp gắn kết tình bạn bè thêm đoàn kết, gắn bó, chân thành và tin tưởng lẫn nhau.</li>
        <li><strong>Tạo môi trường học tập hạnh phúc:</strong> Tạo nên một không khí học đường vui vẻ, an toàn, thân thiện, giúp giảm bớt những áp lực và căng thẳng trong học tập cũng như cuộc sống thường ngày.</li>
        <li><strong>Hỗ trợ cùng tiến bộ:</strong> Giúp các bạn có hoàn cảnh khó khăn hoặc học lực chưa tốt có thêm nghị lực, sự tự tin để vươn lên đạt kết quả tốt hơn.</li>
      </ul>
    `
  },
  {
    id: 'tl-2',
    num: "Câu 2",
    question: "Em hãy giải thích tại sao khi thấy người khác gặp khó khăn, hoạn nạn, chúng ta không nên thờ ơ, lạnh lùng mà cần phải thể hiện sự quan tâm, cảm thông và chia sẻ kịp thời?",
    answer: `
      <p>Chúng ta không nên thờ ơ, lạnh lùng mà cần quan tâm, chia sẻ kịp thời vì:</p>
      <ul>
        <li><strong>Điểm tựa tinh thần to lớn:</strong> Sự quan tâm và chia sẻ đúng lúc là nguồn động viên vô giá, giúp người hoạn nạn vơi bớt nỗi đau, xua tan cảm giác đơn độc, tiếp thêm sức mạnh và niềm tin để vượt qua nghịch cảnh.</li>
        <li><strong>Hạn chế thiệt hại, rủi ro:</strong> Sự trợ giúp kịp thời (về vật chất, sức lực, sơ cứu...) có thể cứu vớt tài sản và thậm chí là tính mạng của người bị nạn.</li>
        <li><strong>Đẩy lùi bệnh vô cảm:</strong> Ngăn chặn sự lạnh lùng, vô cảm trong xã hội; góp phần xây dựng một cộng đồng nhân ái, đoàn kết và văn minh.</li>
      </ul>
    `
  },
  {
    id: 'tl-3',
    num: "Câu 3",
    question: "Địa phương nơi A sinh sống có làng nghề truyền thống làm nón lá lâu đời. Tuy nhiên, do sự cạnh tranh của các mặt hàng thời trang hiện đại, làng nghề đang dần mai một, nhiều hộ gia đình đã chuyển sang làm nghề khác. Vào dịp nghỉ hè, đoàn thanh niên xã phát động chiến dịch \"Em yêu làng nghề truyền thống\" với các hoạt động như: học làm nón, quay video ngắn quảng bá trên mạng xã hội. A rất muốn tham gia nhưng bố mẹ lại khuyên A nên tập trung hoàn toàn vào việc học văn hóa.",
    subQuestions: [
      {
        part: "a. Nếu là A, em sẽ ứng xử như thế nào để vừa vâng lời bố mẹ, vừa thể hiện được trách nhiệm giữ gìn, phát huy truyền thống của quê hương?",
        hint: "Em sẽ thể hiện thái độ lễ phép, khéo léo giải thích cho bố mẹ hiểu: Việc tham gia hoạt động vào dịp hè không làm ảnh hưởng đến việc học mà còn giúp rèn luyện kỹ năng mềm, mở rộng hiểu biết và bồi dưỡng tình yêu quê hương đất nước. Đồng thời, em sẽ chủ động lập thời gian biểu học tập hợp lý, cam kết với bố mẹ vẫn hoàn thành tốt việc ôn tập kiến thức trước khi đi tham gia chiến dịch cùng đoàn thanh niên."
      },
      {
        part: "b. Bản thân em cần phải làm gì (hai việc làm cụ thể) để góp phần giữ gìn và phát huy truyền thống tốt đẹp của quê hương?",
        hint: "1) Chủ động tìm hiểu về lịch sử, ý nghĩa và quy trình làm nón lá truyền thống của quê hương.<br>2) Tích cực dùng mạng xã hội để quay video, viết bài quảng bá vẻ đẹp của chiếc nón lá và làng nghề đến bạn bè trong nước và quốc tế."
      }
    ]
  },
  {
    id: 'tl-4',
    num: "Câu 4",
    question: "Địa phương của B có một loại bánh dân gian truyền thống nổi tiếng từ bao đời nay. Tuy nhiên, thời gian gần đây, vì muốn chạy theo lợi nhuận trước mắt đồng thời tiết kiệm thời gian và chi phí, một số hộ gia đình trong làng đã thay đổi nguyên liệu kém chất lượng, dùng phẩm màu hóa học thay cho màu lá tự nhiên. B cảm thấy rất trăn trở trước việc làm này.",
    subQuestions: [
      {
        part: "a. Nếu là B, em sẽ có những việc làm cụ thể gì để vừa thể hiện sự phê phán, vừa góp phần giữ gìn truyền thống của quê hương?",
        hint: "Kiên quyết từ chối ủng hộ các cơ sở làm ăn gian dối; khuyên nhủ người thân trong gia đình chỉ tin dùng sản phẩm sạch có nguồn gốc rõ ràng. Nhẹ nhàng góp ý, giải thích cho các hộ làm bánh hiểu tác hại của phẩm màu hóa học đối với sức khỏe người tiêu dùng và uy tín của làng nghề. Chủ động học hỏi công thức làm bánh truyền thống từ các nghệ nhân cao tuổi để giữ gìn bí quyết làm bánh ngon, sạch, tự nhiên."
      },
      {
        part: "b. Bản thân em cần phải làm gì (hai việc làm cụ thể) để góp phần giữ gìn và phát huy truyền thống tốt đẹp của quê hương?",
        hint: "1) Tham gia tuyên truyền, vận động cộng đồng và các hộ sản xuất giữ chữ Tín, không sử dụng hóa chất độc hại.<br>2) Giới thiệu, chia sẻ những nét văn hóa, ẩm thực đặc sắc của quê hương mình với bạn bè trong các buổi ngoại khóa và trên mạng xã hội."
      }
    ]
  }
];

/* ==========================================================================
   3. APPLICATION STATE & LOGIC
   ========================================================================== */
class QuizApp {
  constructor() {
    this.questions = [];
    this.userAnswers = {}; // { qId: optionKey } or { qId_stmtId: bool }
    this.flagged = new Set();
    this.currentFilter = 'all';
    this.timerSeconds = 45 * 60;
    this.timerInterval = null;
    this.isTimerRunning = false;
    this.isSubmitted = false;

    this.init();
  }

  init() {
    this.loadQuestions(true); // Initial load with shuffle
    this.bindEvents();
    this.render();
    this.startTimer();
  }

  // Shuffle Helper using Fisher-Yates
  shuffleArray(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  loadQuestions(shouldShuffle = true) {
    const doShuffleQuestions = shouldShuffle && document.getElementById('chkShuffleQuestions')?.checked;
    const doShuffleOptions = shouldShuffle && document.getElementById('chkShuffleOptions')?.checked;

    let list = JSON.parse(JSON.stringify(RAW_QUESTIONS));

    if (doShuffleQuestions) {
      list = this.shuffleArray(list);
    }

    if (doShuffleOptions) {
      list = list.map(q => {
        if (q.type === 'single' && Array.isArray(q.options)) {
          // Shuffle options but maintain newly assigned visual prefixes A, B, C, D
          const shuffledOpts = this.shuffleArray(q.options);
          const letters = ['A', 'B', 'C', 'D'];
          q.options = shuffledOpts.map((opt, idx) => ({
            ...opt,
            key: letters[idx] || opt.key
          }));
        }
        return q;
      });
    }

    this.questions = list;
    this.userAnswers = {};
    this.isSubmitted = false;
    this.updateStats();
  }

  bindEvents() {
    // Theme toggle
    document.getElementById('themeToggle').addEventListener('click', () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
    });

    // Filter tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.currentFilter = btn.dataset.filter;
        this.render();
      });
    });

    // Shuffle button
    document.getElementById('btnShuffle').addEventListener('click', () => {
      this.loadQuestions(true);
      this.render();
      this.showToast("Đã đảo thứ tự câu hỏi và phương án A, B, C, D thành công!");
    });

    // Restore original order
    document.getElementById('btnRestoreOriginal').addEventListener('click', () => {
      this.questions = JSON.parse(JSON.stringify(RAW_QUESTIONS));
      this.userAnswers = {};
      this.isSubmitted = false;
      this.render();
      this.showToast("Đã khôi phục đúng thứ tự và đáp án nguyên bản của đề cương!");
    });

    // Reset Test
    document.getElementById('btnResetTest').addEventListener('click', () => {
      if (confirm("Bạn có chắc chắn muốn làm lại từ đầu không?")) {
        this.loadQuestions(document.getElementById('chkShuffleQuestions').checked);
        this.timerSeconds = 45 * 60;
        this.render();
        this.showToast("Đã làm mới bài thi!");
      }
    });

    // Submit button
    document.getElementById('btnSubmitExam').addEventListener('click', () => {
      this.submitExam();
    });

    // Timer pause/resume
    document.getElementById('btnPauseTimer').addEventListener('click', () => {
      if (this.isTimerRunning) {
        clearInterval(this.timerInterval);
        this.isTimerRunning = false;
        document.getElementById('btnPauseTimer').textContent = "Tiếp tục";
      } else {
        this.startTimer();
        document.getElementById('btnPauseTimer').textContent = "Tạm dừng";
      }
    });

    // Modal buttons
    document.getElementById('modalBtnReview').addEventListener('click', () => {
      document.getElementById('resultModal').classList.remove('active');
    });

    document.getElementById('modalBtnRetry').addEventListener('click', () => {
      document.getElementById('resultModal').classList.remove('active');
      this.loadQuestions(true);
      this.timerSeconds = 45 * 60;
      this.render();
      this.showToast("Đã khởi tạo đề thi mới với thứ tự đảo ngẫu nhiên!");
    });
  }

  startTimer() {
    clearInterval(this.timerInterval);
    this.isTimerRunning = true;
    this.timerInterval = setInterval(() => {
      if (this.timerSeconds > 0) {
        this.timerSeconds--;
        this.updateTimerDisplay();
      } else {
        clearInterval(this.timerInterval);
        this.isTimerRunning = false;
        this.submitExam(true);
      }
    }, 1000);
  }

  updateTimerDisplay() {
    const m = Math.floor(this.timerSeconds / 60).toString().padStart(2, '0');
    const s = (this.timerSeconds % 60).toString().padStart(2, '0');
    document.getElementById('timerClock').textContent = `${m}:${s}`;
  }

  showToast(msg) {
    const toast = document.getElementById('toastMessage');
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2600);
  }

  // Handle Option Selection for Single Choice
  selectOption(qId, selectedKey) {
    if (this.isSubmitted) return;
    this.userAnswers[qId] = selectedKey;
    this.renderSingleQuestion(qId);
    this.updateStats();
    this.renderGrid();
  }

  // Handle True/False Selection for Multiple-TF Statements
  selectTF(qId, stmtId, val) {
    if (this.isSubmitted) return;
    const key = `${qId}_${stmtId}`;
    this.userAnswers[key] = val;
    this.renderSingleQuestion(qId);
    this.updateStats();
    this.renderGrid();
  }

  toggleFlag(qId) {
    if (this.flagged.has(qId)) {
      this.flagged.delete(qId);
    } else {
      this.flagged.add(qId);
    }
    const card = document.getElementById(`qcard-${qId}`);
    if (card) {
      card.classList.toggle('flagged', this.flagged.has(qId));
      const btn = card.querySelector('.btn-flag');
      if (btn) btn.classList.toggle('active', this.flagged.has(qId));
    }
    this.renderGrid();
  }

  submitExam(isAuto = false) {
    if (!isAuto) {
      const totalQ = this.questions.length;
      let answeredCount = 0;
      this.questions.forEach(q => {
        if (q.type === 'single' && this.userAnswers[q.id]) answeredCount++;
        if (q.type === 'multiple-tf') {
          const allAnswered = q.statements.every(s => this.userAnswers[`${q.id}_${s.id}`] !== undefined);
          if (allAnswered) answeredCount++;
        }
      });

      if (answeredCount < totalQ) {
        const confirmed = confirm(`Bạn mới hoàn thành ${answeredCount}/${totalQ} câu hỏi. Bạn có chắc chắn muốn nộp bài ngay bây giờ?`);
        if (!confirmed) return;
      }
    }

    this.isSubmitted = true;
    clearInterval(this.timerInterval);
    this.isTimerRunning = false;
    this.render();

    const stats = this.calculateFinalScore();
    document.getElementById('modalFinalScore').textContent = stats.score.toFixed(1);
    document.getElementById('modalCountCorrect').textContent = stats.correct;
    document.getElementById('modalCountIncorrect').textContent = stats.incorrect;

    const timeSpentSeconds = (45 * 60) - this.timerSeconds;
    const mm = Math.floor(timeSpentSeconds / 60).toString().padStart(2, '0');
    const ss = (timeSpentSeconds % 60).toString().padStart(2, '0');
    document.getElementById('modalTimeSpent').textContent = `${mm}:${ss}`;

    if (stats.score >= 9) {
      document.getElementById('modalRankTitle').textContent = "Xuất Sắc! 🌟";
      document.getElementById('modalRankFeedback').textContent = "Kiến thức giáo dục công dân của bạn rất vững chắc! Hãy tiếp tục duy trì phong độ!";
    } else if (stats.score >= 7) {
      document.getElementById('modalRankTitle').textContent = "Khá Giỏi! 👏";
      document.getElementById('modalRankFeedback').textContent = "Bạn đã nắm rất tốt phần lớn đề cương. Hãy rà soát lại một vài câu sai nhé!";
    } else if (stats.score >= 5) {
      document.getElementById('modalRankTitle').textContent = "Đạt Yêu Cầu 👍";
      document.getElementById('modalRankFeedback').textContent = "Bạn đã vượt qua bài kiểm tra. Hãy xem lại phần giải thích chi tiết để cải thiện thêm!";
    } else {
      document.getElementById('modalRankTitle').textContent = "Cần Cố Gắng Hơn! 📖";
      document.getElementById('modalRankFeedback').textContent = "Hãy ôn lại các tình huống và bấm 'Xem lại bài làm' để nắm vững kiến thức.";
    }

    document.getElementById('resultModal').classList.add('active');
  }

  calculateFinalScore() {
    let correctCount = 0;
    let incorrectCount = 0;
    const total = this.questions.length;

    this.questions.forEach(q => {
      if (q.type === 'single') {
        const userChoice = this.userAnswers[q.id];
        const correctOpt = q.options.find(o => o.isCorrect);
        if (userChoice) {
          if (userChoice === correctOpt.key) {
            correctCount++;
          } else {
            incorrectCount++;
          }
        }
      } else if (q.type === 'multiple-tf') {
        let stmtCorrect = 0;
        q.statements.forEach(s => {
          const userVal = this.userAnswers[`${q.id}_${s.id}`];
          if (userVal === s.isCorrect) stmtCorrect++;
        });
        if (stmtCorrect === 4) {
          correctCount++;
        } else if (stmtCorrect > 0) {
          correctCount += (stmtCorrect / 4);
          incorrectCount += ((4 - stmtCorrect) / 4);
        }
      }
    });

    const score = (correctCount / total) * 10;
    return { score, correct: Math.round(correctCount), incorrect: Math.round(incorrectCount) };
  }

  updateStats() {
    let answered = 0;
    let correct = 0;
    let incorrect = 0;
    const isInstant = document.getElementById('chkInstantFeedback')?.checked || this.isSubmitted;

    this.questions.forEach(q => {
      if (q.type === 'single') {
        const userChoice = this.userAnswers[q.id];
        if (userChoice) {
          answered++;
          const correctOpt = q.options.find(o => o.isCorrect);
          if (userChoice === correctOpt.key) correct++;
          else incorrect++;
        }
      } else if (q.type === 'multiple-tf') {
        const answeredStmts = q.statements.filter(s => this.userAnswers[`${q.id}_${s.id}`] !== undefined);
        if (answeredStmts.length === q.statements.length) {
          answered++;
        }
        if (answeredStmts.length > 0) {
          let c = 0;
          answeredStmts.forEach(s => {
            if (this.userAnswers[`${q.id}_${s.id}`] === s.isCorrect) c++;
          });
          if (c === 4) correct++;
          else if (answeredStmts.length === 4) incorrect++;
        }
      }
    });

    document.getElementById('statAnswered').textContent = `${answered}/${this.questions.length}`;
    if (isInstant) {
      document.getElementById('statCorrect').textContent = correct;
      document.getElementById('statIncorrect').textContent = incorrect;
      const score = (correct / this.questions.length) * 10;
      document.getElementById('statScore').textContent = score.toFixed(1);
    } else {
      document.getElementById('statCorrect').textContent = "-";
      document.getElementById('statIncorrect').textContent = "-";
      document.getElementById('statScore').textContent = "-";
    }
  }

  render() {
    const qContainer = document.getElementById('questionsContainer');
    const essayContainer = document.getElementById('essayContainer');

    if (this.currentFilter === 'part3') {
      qContainer.style.display = 'none';
      essayContainer.style.display = 'block';
      this.renderEssays();
      this.renderGrid();
      return;
    }

    qContainer.style.display = 'flex';
    essayContainer.style.display = 'none';

    // Filter list
    let displayList = this.questions;
    if (this.currentFilter === 'part1') {
      displayList = this.questions.filter(q => q.part === 1);
    } else if (this.currentFilter === 'part2') {
      displayList = this.questions.filter(q => q.part === 2);
    }

    qContainer.innerHTML = displayList.map((q, idx) => this.generateQuestionHTML(q, idx + 1)).join('');
    this.renderGrid();
    this.updateStats();
  }

  renderSingleQuestion(qId) {
    const q = this.questions.find(x => x.id === qId);
    if (!q) return;
    const card = document.getElementById(`qcard-${qId}`);
    if (!card) return;

    const qNum = card.querySelector('.q-num-badge')?.dataset?.index || q.id;
    card.outerHTML = this.generateQuestionHTML(q, qNum);
  }

  generateQuestionHTML(q, displayIndex) {
    const isFlagged = this.flagged.has(q.id);
    const isInstant = document.getElementById('chkInstantFeedback')?.checked || this.isSubmitted;

    let contentHTML = '';

    if (q.type === 'single') {
      const userChoice = this.userAnswers[q.id];
      const hasAnswered = !!userChoice;
      const showAnswerFeedback = isInstant && hasAnswered;

      contentHTML = `
        <div class="options-grid">
          ${q.options.map(opt => {
            let classes = 'option-item';
            let icon = '';

            if (userChoice === opt.key) {
              classes += ' selected';
            }

            if (showAnswerFeedback) {
              if (opt.isCorrect) {
                classes += ' is-correct';
                icon = `<span class="option-status-icon" style="color: var(--success);">✓</span>`;
              } else if (userChoice === opt.key && !opt.isCorrect) {
                classes += ' is-incorrect';
                icon = `<span class="option-status-icon" style="color: var(--error);">✗</span>`;
              }
            }

            if (this.isSubmitted) classes += ' disabled';

            return `
              <div class="${classes}" onclick="app.selectOption(${q.id}, '${opt.key}')">
                <div class="option-prefix">${opt.key}</div>
                <div class="option-text">${opt.text}</div>
                ${icon}
              </div>
            `;
          }).join('')}
        </div>
      `;
    } else if (q.type === 'multiple-tf') {
      contentHTML = `
        ${q.scenario ? `<div class="q-scenario"><strong>Tình huống:</strong> ${q.scenario}</div>` : ''}
        <div class="tf-table-wrap">
          <table class="tf-table">
            <thead>
              <tr>
                <th style="width: 70%;">Nội dung lệnh hỏi</th>
                <th style="width: 30%; text-align: center;">Xác định Đúng/Sai</th>
              </tr>
            </thead>
            <tbody>
              ${q.statements.map(stmt => {
                const userVal = this.userAnswers[`${q.id}_${stmt.id}`];
                const hasAnswered = userVal !== undefined;
                const showFeedback = isInstant && hasAnswered;

                let trueClasses = 'tf-btn';
                let falseClasses = 'tf-btn';

                if (userVal === true) trueClasses += ' selected-true';
                if (userVal === false) falseClasses += ' selected-false';

                if (showFeedback) {
                  if (stmt.isCorrect === true) {
                    trueClasses += ' correct-choice';
                  } else {
                    falseClasses += ' correct-choice';
                  }

                  if (userVal === true && !stmt.isCorrect) trueClasses += ' wrong-choice';
                  if (userVal === false && stmt.isCorrect) falseClasses += ' wrong-choice';
                }

                return `
                  <tr class="tf-statement-row">
                    <td><strong>${stmt.label}.</strong> ${stmt.text}</td>
                    <td style="text-align: center;">
                      <div class="tf-btn-group">
                        <button class="${trueClasses}" onclick="app.selectTF(${q.id}, '${stmt.id}', true)">Đúng (Đ)</button>
                        <button class="${falseClasses}" onclick="app.selectTF(${q.id}, '${stmt.id}', false)">Sai (S)</button>
                      </div>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      `;
    }

    let shouldShowExplanation = false;
    if (isInstant) {
      if (q.type === 'single' && this.userAnswers[q.id]) shouldShowExplanation = true;
      if (q.type === 'multiple-tf') {
        const hasAny = q.statements.some(s => this.userAnswers[`${q.id}_${s.id}`] !== undefined);
        if (hasAny) shouldShowExplanation = true;
      }
    }

    return `
      <div class="question-card ${isFlagged ? 'flagged' : ''}" id="qcard-${q.id}">
        <div class="q-header">
          <div class="q-badge-wrap">
            <span class="q-num-badge" data-index="${displayIndex}">Câu ${displayIndex}</span>
            <span class="q-type-badge">${q.type === 'single' ? '4 Lựa Chọn' : 'Đúng / Sai'}</span>
            <span style="font-size: 0.72rem; color: var(--text-muted);">Mã gốc: #${q.id}</span>
          </div>
          <div class="q-actions">
            <button class="btn-flag ${isFlagged ? 'active' : ''}" onclick="app.toggleFlag(${q.id})" title="Đánh dấu câu hỏi này">
              ${isFlagged ? '★' : '☆'}
            </button>
          </div>
        </div>

        <div class="q-title">${q.title}</div>
        ${contentHTML}

        <div class="explanation-box ${shouldShowExplanation ? 'show' : ''}">
          <strong>💡 Lời giải & Phân tích chi tiết:</strong>
          ${q.explanation}
        </div>
      </div>
    `;
  }

  renderEssays() {
    const essayContainer = document.getElementById('essayContainer');
    essayContainer.innerHTML = `
      <div style="background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 1.25rem 1.5rem; margin-bottom: 1.25rem;">
        <h2 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 800; color: var(--primary);">B. PHẦN TỰ LUẬN ÔN TẬP (CÂU 1 - CÂU 4)</h2>
        <p style="font-size: 0.9rem; color: var(--text-muted); margin-top: 0.35rem;">Tổng hợp toàn bộ các câu hỏi tình huống tự luận và hướng dẫn trả lời chi tiết chuẩn thang điểm.</p>
      </div>

      ${RAW_ESSAYS.map(essay => `
        <div class="essay-card">
          <div class="essay-title">
            <span class="essay-badge">${essay.num}</span>
            <span>${essay.question}</span>
          </div>

          ${essay.answer ? `
            <div class="essay-answer-box">
              <strong>📌 Hướng dẫn trả lời & Gợi ý đáp án:</strong>
              ${essay.answer}
            </div>
          ` : ''}

          ${essay.subQuestions ? `
            <div style="display: flex; flex-direction: column; gap: 0.85rem; margin-top: 1rem;">
              ${essay.subQuestions.map(sub => `
                <div style="background: var(--bg-main); padding: 1rem; border-radius: var(--radius-md); border-left: 3px solid #059669;">
                  <div style="font-weight: 700; color: var(--text-main); margin-bottom: 0.4rem;">${sub.part}</div>
                  <div style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.65;">
                    <strong style="color: var(--text-main);">Gợi ý giải quyết:</strong> ${sub.hint}
                  </div>
                </div>
              `).join('')}
            </div>
          ` : ''}
        </div>
      `).join('')}
    `;
  }

  renderGrid() {
    const grid = document.getElementById('questionGrid');
    if (!grid) return;

    let answeredCount = 0;
    const isInstant = document.getElementById('chkInstantFeedback')?.checked || this.isSubmitted;

    grid.innerHTML = this.questions.map((q, idx) => {
      let classes = 'q-grid-btn';
      const isFlag = this.flagged.has(q.id);
      if (isFlag) classes += ' flagged';

      if (q.type === 'single') {
        const userChoice = this.userAnswers[q.id];
        if (userChoice) {
          answeredCount++;
          classes += ' answered';
          if (isInstant) {
            const isCorrect = q.options.find(o => o.key === userChoice)?.isCorrect;
            classes += isCorrect ? ' correct' : ' incorrect';
          }
        }
      } else if (q.type === 'multiple-tf') {
        const answeredStmts = q.statements.filter(s => this.userAnswers[`${q.id}_${s.id}`] !== undefined);
        if (answeredStmts.length === q.statements.length) {
          answeredCount++;
          classes += ' answered';
          if (isInstant) {
            const allCorrect = q.statements.every(s => this.userAnswers[`${q.id}_${s.id}`] === s.isCorrect);
            classes += allCorrect ? ' correct' : ' incorrect';
          }
        } else if (answeredStmts.length > 0) {
          classes += ' answered';
        }
      }

      return `
        <button class="${classes}" onclick="app.scrollToQuestion(${q.id})" title="Câu ${idx + 1}">
          ${idx + 1}
        </button>
      `;
    }).join('');

    document.getElementById('gridProgressText').textContent = `${answeredCount}/${this.questions.length} đã làm`;
  }

  scrollToQuestion(qId) {
    if (this.currentFilter === 'part3') {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelector('.tab-btn[data-filter="all"]').classList.add('active');
      this.currentFilter = 'all';
      this.render();
    }

    setTimeout(() => {
      const el = document.getElementById(`qcard-${qId}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.style.boxShadow = '0 0 0 3px var(--primary-light)';
        setTimeout(() => {
          el.style.boxShadow = '';
        }, 1200);
      }
    }, 50);
  }
}

// Initialize application
let app;
window.addEventListener('DOMContentLoaded', () => {
  app = new QuizApp();
});
