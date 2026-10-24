/* ==========================================================================
       1. DATA DEFINITIONS - CÔNG NGHỆ 7 (PAGES 1 - 4)
       ========================================================================== */
    const RAW_QUESTIONS = [
      // --- PHẦN I: TRẮC NGHIỆM 4 LỰA CHỌN (CÂU 1 - 24) ---
      {
        id: 1, part: 1, type: 'single',
        title: "Cặp phương pháp thu hoạch và sản phẩm nào sau đây phù hợp nhất?",
        options: [
          { key: 'A', text: "Hái củ cà rốt.", isCorrect: false },
          { key: 'B', text: "Đào khoai tây.", isCorrect: true },
          { key: 'C', text: "Nhổ quả cam.", isCorrect: false },
          { key: 'D', text: "Cắt quả dưa hấu khỏi mặt đất bằng cách nhổ cả cây.", isCorrect: false }
        ],
        explanation: "Khoai tây là loại cây lấy củ ngầm dưới mặt đất, phương pháp thu hoạch chuẩn là đào hoặc nhổ. Cà rốt nhổ củ, quả cam thu hoạch bằng cách hái/cắt."
      },
      {
        id: 2, part: 1, type: 'single',
        title: "Phương pháp thu hoạch nào thường phù hợp với các loại quả như cam, xoài và nhãn?",
        options: [
          { key: 'A', text: "Đào", isCorrect: false },
          { key: 'B', text: "Nhổ", isCorrect: false },
          { key: 'C', text: "Hái", isCorrect: true },
          { key: 'D', text: "Tuốt rễ", isCorrect: false }
        ],
        explanation: "Các loại quả trên cành như cam, xoài, nhãn thường được thu hoạch bằng phương pháp hái nhẹ nhàng bằng tay hoặc dụng cụ kéo hái chuyên dụng để tránh dập nát."
      },
      {
        id: 3, part: 1, type: 'single',
        title: "Yêu cầu nào sau đây cần được bảo đảm khi thu hoạch sản phẩm trồng trọt?",
        options: [
          { key: 'A', text: "Thu hoạch bất cứ lúc nào để tiết kiệm công lao động.", isCorrect: false },
          { key: 'B', text: "Thu hoạch đúng độ chín, đúng thời điểm và hạn chế làm dập nát sản phẩm.", isCorrect: true },
          { key: 'C', text: "Thu hoạch khi sản phẩm còn non đối với mọi loại cây.", isCorrect: false },
          { key: 'D', text: "Thu hoạch thật nhanh, không cần phân loại sản phẩm.", isCorrect: false }
        ],
        explanation: "Thu hoạch cần bảo đảm thu hoạch đúng độ chín, đúng thời điểm và thao tác cẩn thận để hạn chế làm dập nát, bảo quản sản phẩm được lâu và giữ chất lượng tốt."
      },
      {
        id: 4, part: 1, type: 'single',
        title: "Một trang trại sử dụng nhà màng, hệ thống tưới nhỏ giọt, cảm biến nhiệt độ và phần mềm theo dõi độ ẩm đất. Nhận xét nào sau đây phù hợp nhất?",
        options: [
          { key: 'A', text: "Đây là phương thức độc canh truyền thống.", isCorrect: false },
          { key: 'B', text: "Đây là trồng trọt công nghệ cao vì có khả năng kiểm soát và tự động hóa một số khâu.", isCorrect: true },
          { key: 'C', text: "Đây là phương thức trồng trọt không cần chăm sóc.", isCorrect: false },
          { key: 'D', text: "Đây là phương thức chỉ phù hợp với cây lương thực.", isCorrect: false }
        ],
        explanation: "Việc ứng dụng nhà màng, cảm biến tự động, tưới nhỏ giọt và phần mềm giám sát là đặc trưng tiêu biểu của nền nông nghiệp công nghệ cao."
      },
      {
        id: 5, part: 1, type: 'single',
        title: "Nhóm cây trồng nào sau đây gồm toàn các cây lương thực?",
        options: [
          { key: 'A', text: "Lúa, ngô, sắn", isCorrect: true },
          { key: 'B', text: "Lúa, cà phê, cao su", isCorrect: false },
          { key: 'C', text: "Ngô, chè, hồ tiêu", isCorrect: false },
          { key: 'D', text: "Sắn, cam, bưởi", isCorrect: false }
        ],
        explanation: "Lúa, ngô, sắn (khoai mì), khoai lang là các cây lương thực chính cung cấp tinh bột cho con người. Cà phê, chè, cao su là cây công nghiệp; cam, bưởi là cây ăn quả."
      },
      {
        id: 6, part: 1, type: 'single',
        title: "Trồng trọt có vai trò quan trọng đối với nền kinh tế vì",
        options: [
          { key: 'A', text: "chỉ cung cấp lương thực cho con người.", isCorrect: false },
          { key: 'B', text: "chỉ tạo ra sản phẩm phục vụ xuất khẩu.", isCorrect: false },
          { key: 'C', text: "cung cấp lương thực, thực phẩm, nguyên liệu sản xuất, thức ăn chăn nuôi và tạo việc làm.", isCorrect: true },
          { key: 'D', text: "chủ yếu tạo cảnh quan và làm đẹp môi trường.", isCorrect: false }
        ],
        explanation: "Trồng trọt cung cấp lương thực thực phẩm thiết yếu, nguyên liệu cho công nghiệp chế biến, thức ăn cho ngành chăn nuôi, nông sản xuất khẩu và tạo việc làm cho hàng triệu lao động."
      },
      {
        id: 7, part: 1, type: 'single',
        title: "Thành phần của đất trồng gồm",
        options: [
          { key: 'A', text: "phần rắn, phần lỏng và phần khí.", isCorrect: true },
          { key: 'B', text: "cát, sỏi và đá.", isCorrect: false },
          { key: 'C', text: "nước, phân bón và thuốc bảo vệ thực vật.", isCorrect: false },
          { key: 'D', text: "rễ cây, vi sinh vật và cỏ dại.", isCorrect: false }
        ],
        explanation: "Đất trồng bao gồm 3 phần chính: phần rắn (chất vô cơ và chất hữu cơ), phần lỏng (nước trong đất) và phần khí (không khí chứa oxy, nitơ, cacbonic cho rễ hô hấp)."
      },
      {
        id: 8, part: 1, type: 'single',
        title: "Vai trò nào sau đây không phải là vai trò của đất trồng?",
        options: [
          { key: 'A', text: "Giữ cho cây đứng vững.", isCorrect: false },
          { key: 'B', text: "Cung cấp nước và chất dinh dưỡng cho cây.", isCorrect: false },
          { key: 'C', text: "Cung cấp môi trường không khí cho rễ cây.", isCorrect: false },
          { key: 'D', text: "Thay thế hoàn toàn ánh sáng cần thiết cho cây.", isCorrect: true }
        ],
        explanation: "Đất trồng không thể thay thế ánh sáng mặt trời; ánh sáng là yếu tố bắt buộc để cây quang hợp tạo chất hữu cơ nuôi sống cây."
      },
      {
        id: 9, part: 1, type: 'single',
        title: "Một khu đất trồng có nhiều cỏ dại, đất bị nén chặt và còn tàn dư thực vật. Trình tự chuẩn bị đất hợp lí nhất là",
        options: [
          { key: 'A', text: "gieo hạt ngay, sau đó mới làm đất.", isCorrect: false },
          { key: 'B', text: "xác định diện tích, vệ sinh đất, làm đất và cải tạo đất.", isCorrect: true },
          { key: 'C', text: "bón thật nhiều phân hóa học rồi gieo trồng.", isCorrect: false },
          { key: 'D', text: "tưới nước thật nhiều, sau đó bỏ qua việc làm đất.", isCorrect: false }
        ],
        explanation: "Quy trình chuẩn bị đất chuẩn: 1) Xác định diện tích -> 2) Vệ sinh đất (dọn cỏ, tàn dư sâu bệnh) -> 3) Làm đất (cày bừa, đập đất, lên luống) -> 4) Cải tạo đất (bón vôi, phân lót)."
      },
      {
        id: 10, part: 1, type: 'single',
        title: "Mục đích của việc chuẩn bị đất trồng là",
        options: [
          { key: 'A', text: "đảm bảo hạt giống và cây con khỏe mạnh, sạch sâu, bệnh, đủ số lượng giống.", isCorrect: false },
          { key: 'B', text: "để cây được trồng ở điều kiện khí hậu, mật độ thích hợp, giúp cây đạt năng suất cao.", isCorrect: false },
          { key: 'C', text: "làm cho đất trở nên tơi xốp, loại bỏ chất độc, cỏ dại.", isCorrect: true },
          { key: 'D', text: "nhằm nuôi dưỡng, bảo vệ, phòng trừ các yếu tố gây hại cho cây.", isCorrect: false }
        ],
        explanation: "Làm đất giúp đất thông thoáng, tơi xốp, tăng khả năng giữ ẩm, diệt mầm mống cỏ dại, ấu trùng sâu bệnh và hạn chế chất độc hại trong đất."
      },
      {
        id: 11, part: 1, type: 'single',
        title: "Hoạt động nào sau đây thuộc công việc chăm sóc cây trồng?",
        options: [
          { key: 'A', text: "Làm cỏ, vun xới, tưới nước và bón phân.", isCorrect: true },
          { key: 'B', text: "Chọn địa điểm xây dựng kho chứa nông sản.", isCorrect: false },
          { key: 'C', text: "Đóng gói sản phẩm sau thu hoạch.", isCorrect: false },
          { key: 'D', text: "Vận chuyển nông sản đến nơi tiêu thụ.", isCorrect: false }
        ],
        explanation: "Chăm sóc cây trồng gồm các biện pháp kĩ thuật nuôi dưỡng và bảo vệ cây: tỉa dặm cây, làm cỏ, vun xới, tưới tiêu nước và bón phân thúc."
      },
      {
        id: 12, part: 1, type: 'single',
        title: "Yêu cầu nào sau đây cần được bảo đảm khi thu hoạch sản phẩm trồng trọt?",
        options: [
          { key: 'A', text: "Thu hoạch bất cứ lúc nào để tiết kiệm công lao động.", isCorrect: false },
          { key: 'B', text: "Thu hoạch đúng độ chín, đúng thời điểm và hạn chế làm dập nát sản phẩm.", isCorrect: true },
          { key: 'C', text: "Thu hoạch khi sản phẩm còn non đối với mọi loại cây.", isCorrect: false },
          { key: 'D', text: "Thu hoạch thật nhanh, không cần phân loại sản phẩm.", isCorrect: false }
        ],
        explanation: "Thu hoạch phải đúng lúc, đúng độ chín sinh lí/thương phẩm, cẩn thận để nông sản không bị trầy xước, dập nát."
      },
      {
        id: 13, part: 1, type: 'single',
        title: "Yêu cầu nào sau đây đúng khi tưới nước và bón phân cho cây trồng?",
        options: [
          { key: 'A', text: "Tưới càng nhiều nước và bón càng nhiều phân càng tốt.", isCorrect: false },
          { key: 'B', text: "Chỉ tưới nước khi cây bắt đầu héo.", isCorrect: false },
          { key: 'C', text: "Tưới nước và bón phân phù hợp với loại cây, loại đất và từng giai đoạn sinh trưởng.", isCorrect: true },
          { key: 'D', text: "Bón nhiều phân đạm ở tất cả các giai đoạn sinh trưởng.", isCorrect: false }
        ],
        explanation: "Mỗi loại cây, từng loại đất và từng thời kì phát triển (cây non, đẻ nhánh, ra hoa, kết quả) đòi hỏi lượng nước và tỉ lệ dinh dưỡng khác nhau."
      },
      {
        id: 14, part: 1, type: 'single',
        title: "Sau khi gieo hạt, một số vị trí trên luống không có cây mọc, trong khi một số vị trí khác cây mọc quá dày. Biện pháp phù hợp là",
        options: [
          { key: 'A', text: "chỉ tưới thêm nước cho toàn bộ luống.", isCorrect: false },
          { key: 'B', text: "tỉa cây ở nơi mọc dày và dặm cây ở nơi cây không mọc.", isCorrect: true },
          { key: 'C', text: "nhổ bỏ toàn bộ cây rồi gieo lại.", isCorrect: false },
          { key: 'D', text: "bón thật nhiều phân đạm cho cây mọc dày.", isCorrect: false }
        ],
        explanation: "Biện pháp tỉa cây yếu/quá dày và dặm cây khỏe vào chỗ khuyết giúp bảo đảm mật độ và khoảng cách đồng đều, cho năng suất cao nhất."
      },
      {
        id: 15, part: 1, type: 'single',
        title: "Hành động nào không bảo đảm an toàn lao động và vệ sinh môi trường khi chăm sóc cây trồng?",
        options: [
          { key: 'A', text: "Sử dụng găng tay khi chăm sóc, bắt sâu cho cây trồng.", isCorrect: false },
          { key: 'B', text: "Thu gom bao bì thuốc bảo vệ thực vật về đúng nơi quy định.", isCorrect: false },
          { key: 'C', text: "Sử dụng đồ bảo hộ (quần, áo, kính, khẩu trang, …) khi phun thuốc cho cây.", isCorrect: false },
          { key: 'D', text: "Sử dụng thuốc bảo vệ thực vật với nồng độ và liều lượng cao để diệt sâu hại.", isCorrect: true }
        ],
        explanation: "Tự ý tăng nồng độ thuốc bảo vệ thực vật gây nguy hiểm cho người phun, làm cháy lá cây, gây ô nhiễm đất, nguồn nước và tồn dư hóa chất độc hại trong nông sản."
      },
      {
        id: 16, part: 1, type: 'single',
        title: "Trồng trọt theo phương pháp hữu cơ là sử dụng ........",
        options: [
          { key: 'A', text: "đất trồng không chứa chất độc hại", isCorrect: false },
          { key: 'B', text: "Nước tưới không bị ô nhiễm", isCorrect: false },
          { key: 'C', text: "chất gây biến đổi gen", isCorrect: false },
          { key: 'D', text: "Cả A và B đều đúng", isCorrect: true }
        ],
        explanation: "Canh tác hữu cơ bắt buộc đất trồng và nguồn nước tưới phải sạch hoàn toàn, không ô nhiễm hóa chất, kim loại nặng hay chất thải công nghiệp."
      },
      {
        id: 17, part: 1, type: 'single',
        title: "Đối với các loại củ nằm dưới mặt đất như khoai tây và cà rốt, phương pháp thu hoạch thường được sử dụng là",
        options: [
          { key: 'A', text: "hái.", isCorrect: false },
          { key: 'B', text: "đào hoặc nhổ.", isCorrect: true },
          { key: 'C', text: "cắt trên ngọn cây.", isCorrect: false },
          { key: 'D', text: "tuốt hạt.", isCorrect: false }
        ],
        explanation: "Các loại củ rễ nằm trong lòng đất như khoai tây, cà rốt, sắn, củ cải được thu hoạch bằng phương pháp đào hoặc nhổ."
      },
      {
        id: 18, part: 1, type: 'single',
        title: "Trồng trọt theo phương pháp hữu cơ là KHÔNG sử dụng .........",
        options: [
          { key: 'A', text: "thuốc bảo vệ thực vật có nguồn gốc tự nhiên", isCorrect: false },
          { key: 'B', text: "phân bón hữu cơ", isCorrect: false },
          { key: 'C', text: "chất kích thích sinh trưởng", isCorrect: true },
          { key: 'D', text: "nước sạch", isCorrect: false }
        ],
        explanation: "Nông nghiệp hữu cơ nghiêm cấm sử dụng các chất điều hòa, kích thích sinh trưởng hóa học tổng hợp, phân bón vô cơ và thuốc trừ sâu hóa học."
      },
      {
        id: 19, part: 1, type: 'single',
        title: "Một hộ gia đình thu hoạch rau ăn lá vào giữa trưa nắng, sau đó chất thành đống và vận chuyển trong bao kín. Hậu quả nào có khả năng xảy ra?",
        options: [
          { key: 'A', text: "Rau giữ được độ tươi lâu hơn.", isCorrect: false },
          { key: 'B', text: "Rau dễ mất nước, nóng, dập nát và nhanh giảm chất lượng.", isCorrect: true },
          { key: 'C', text: "Rau sẽ tăng khối lượng sau khi vận chuyển.", isCorrect: false },
          { key: 'D', text: "Rau không bị ảnh hưởng vì đã được thu hoạch đúng ngày.", isCorrect: false }
        ],
        explanation: "Thu hoạch lúc nắng gắt làm rau bị bốc hơi nước nhanh; chất đống kín làm ứ đọng nhiệt và hô hấp yếm khí, rau sẽ bị thối nhũn và dập hỏng."
      },
      {
        id: 20, part: 1, type: 'single',
        title: "Một vườn cà chua cần vận chuyển sản phẩm đi xa. Phương án nào sau đây giúp hạn chế hao hụt và bảo đảm chất lượng tốt hơn?",
        options: [
          { key: 'A', text: "Thu hoạch khi quả quá non, không phân loại và xếp thật chặt.", isCorrect: false },
          { key: 'B', text: "Thu hoạch đúng độ già phù hợp, phân loại, xếp nhẹ nhàng và sử dụng bao bì thông thoáng.", isCorrect: true },
          { key: 'C', text: "Thu hoạch khi quả đã quá chín mềm để có màu sắc đẹp.", isCorrect: false },
          { key: 'D', text: "Để quả tiếp xúc trực tiếp với ánh nắng trong suốt quá trình vận chuyển.", isCorrect: false }
        ],
        explanation: "Cà chua vận chuyển đường xa cần hái khi quả bắt đầu chuyển màu (ương), phân loại kĩ, lót xốp xếp lớp thoáng khí để không bị bầm dập khi xóc."
      },
      {
        id: 21, part: 1, type: 'single',
        title: "Một gia đình muốn trồng rau sạch tại nhà nhưng diện tích đất nhỏ, điều kiện thời tiết không ổn định và thường xuất hiện sâu bệnh. Gia đình nên lựa chọn phương thức trồng trọt nào để có thể kiểm soát tốt hơn các yếu tố ảnh hưởng đến cây?",
        options: [
          { key: 'A', text: "Trồng cây hoàn toàn ngoài tự nhiên, không cần chăm sóc.", isCorrect: false },
          { key: 'B', text: "Trồng trong nhà có mái che hoặc áp dụng một số phương pháp trồng trọt công nghệ cao.", isCorrect: true },
          { key: 'C', text: "Trồng cây ở nơi đất trống, không cần che chắn.", isCorrect: false },
          { key: 'D', text: "Chỉ trồng những loại cây không cần nước.", isCorrect: false }
        ],
        explanation: "Trồng trong nhà lưới/màng che chắn giúp tránh mưa gió dập, côn trùng cắn phá; kết hợp thủy canh/tưới nhỏ giọt rất tiết kiệm không gian diện tích nhỏ."
      },
      {
        id: 22, part: 1, type: 'single',
        title: "Trước khi gieo trồng, người nông dân thường tiến hành cày đất, bừa hoặc đập đất, lên luống và bón phân lót. Việc làm đất có tác dụng chủ yếu nào sau đây?",
        options: [
          { key: 'A', text: "Làm cho đất cứng hơn để cây không bị đổ.", isCorrect: false },
          { key: 'B', text: "Làm đất tơi xốp, diệt cỏ dại, hạn chế sâu bệnh và tạo điều kiện thuận lợi cho rễ cây phát triển.", isCorrect: true },
          { key: 'C', text: "Làm cho đất mất hết nước và chất dinh dưỡng.", isCorrect: false },
          { key: 'D', text: "Làm cây trồng ra hoa ngay sau khi gieo hạt.", isCorrect: false }
        ],
        explanation: "Làm đất kỹ giúp đất thoáng khí cho rễ thở, phơi ải diệt nguồn mầm bệnh, cỏ dại và phân giải dinh dưỡng cho rễ non dễ hút."
      },
      {
        id: 23, part: 1, type: 'single',
        title: "Trong các yêu cầu dưới đây, yêu cầu nào không phù hợp khi gieo trồng cây?",
        options: [
          { key: 'A', text: "Gieo trồng đúng thời vụ.", isCorrect: false },
          { key: 'B', text: "Đảm bảo mật độ và khoảng cách thích hợp.", isCorrect: false },
          { key: 'C', text: "Gieo hạt ở độ sâu phù hợp với từng loại cây.", isCorrect: false },
          { key: 'D', text: "Gieo trồng càng dày càng tốt để thu được nhiều cây.", isCorrect: true }
        ],
        explanation: "Gieo quá dày làm cây cạnh tranh gay gắt ánh sáng, nước và chất dinh dưỡng, cây sẽ còi cọc, yếu ớt và dễ bùng phát dịch bệnh hại."
      },
      {
        id: 24, part: 1, type: 'single',
        title: "Biện pháp sinh học trong phòng trừ sâu, bệnh cho cây trồng là biện pháp nào dưới đây?",
        options: [
          { key: 'A', text: "Sử dụng thiên địch hoặc chế phẩm sinh học để hạn chế sâu bệnh.", isCorrect: true },
          { key: 'B', text: "Dùng tay bắt sâu trên cây.", isCorrect: false },
          { key: 'C', text: "Cày bừa đất trước khi gieo trồng.", isCorrect: false },
          { key: 'D', text: "Phun thuốc hóa học với liều lượng cao.", isCorrect: false }
        ],
        explanation: "Biện pháp sinh học là sử dụng sinh vật có ích (bọ rùa, ong mắt đỏ, nấm đối kháng) hoặc các chế phẩm sinh học (BT, thảo mộc) để tiêu diệt sâu hại an toàn."
      },

      // --- PHẦN II: TRẮC NGHIỆM ĐÚNG / SAI (CÂU 25 - 32) ---
      {
        id: 25, part: 2, type: 'tf-item',
        title: "Trồng trọt công nghệ cao thường ứng dụng tự động hóa và kiểm soát một số điều kiện sinh trưởng của cây.",
        isCorrect: true,
        explanation: "ĐÚNG. Nông nghiệp công nghệ cao sử dụng cảm biến điều hòa nhiệt độ, độ ẩm, tưới nhỏ giọt tự động giúp cây sinh trưởng tối ưu."
      },
      {
        id: 26, part: 2, type: 'tf-item',
        title: "Làm đất giúp đất tơi xốp, hạn chế cỏ dại và tạo điều kiện thuận lợi cho rễ cây phát triển.",
        isCorrect: true,
        explanation: "ĐÚNG. Cày bừa làm đất tơi xốp, giữ ẩm, vùi lấp diệt cỏ dại và tạo điều kiện cho bộ rễ đâm sâu hút dưỡng chất."
      },
      {
        id: 27, part: 2, type: 'tf-item',
        title: "Đất trồng chỉ có vai trò giữ cho cây đứng vững, không cung cấp nước và chất dinh dưỡng cho cây.",
        isCorrect: false,
        explanation: "SAI. Đất trồng vừa là giá thể giữ cây đứng vững, vừa cung cấp nước, chất khoáng dinh dưỡng và không khí nuôi sống rễ cây."
      },
      {
        id: 28, part: 2, type: 'tf-item',
        title: "Trồng trọt cung cấp lương thực, thực phẩm và nguyên liệu cho một số ngành sản xuất.",
        isCorrect: true,
        explanation: "ĐÚNG. Trồng trọt là nền tảng cung cấp gạo, ngô, rau quả và nguyên liệu cho ngành dệt may, chế biến đường, cà phê, cao su."
      },
      {
        id: 29, part: 2, type: 'tf-item',
        title: "Khi thu hoạch, cần hạn chế làm dập nát sản phẩm để thuận lợi cho bảo quản và vận chuyển.",
        isCorrect: true,
        explanation: "ĐÚNG. Vết trầy xước, dập nát là cửa ngõ cho vi khuẩn, nấm mốc xâm nhập gây thối hỏng nhanh chóng nông sản."
      },
      {
        id: 30, part: 2, type: 'tf-item',
        title: "Tưới nước và bón phân cần phù hợp với loại cây và từng giai đoạn sinh trưởng.",
        isCorrect: true,
        explanation: "ĐÚNG. Cây con cần nhiều lân để bén rễ; giai đoạn lớn cần đạm; giai đoạn ra hoa kết quả cần kali và lượng nước đầy đủ."
      },
      {
        id: 31, part: 2, type: 'tf-item',
        title: "Sử dụng thuốc bảo vệ thực vật với nồng độ càng cao thì càng an toàn cho cây trồng và môi trường.",
        isCorrect: false,
        explanation: "SAI. Nồng độ quá cao sẽ làm cháy lá cây, gây ngộ độc đất, ô nhiễm nguồn nước và nguy hiểm tính mạng con người."
      },
      {
        id: 32, part: 2, type: 'tf-item',
        title: "Thu hoạch đúng thời điểm giúp bảo đảm chất lượng và hạn chế hao hụt sản phẩm.",
        isCorrect: true,
        explanation: "ĐÚNG. Thu hoạch đúng độ chín sinh học/thương phẩm giữ trọn vẹn hương vị, hàm lượng dinh dưỡng và giảm tỉ lệ hư hỏng."
      }
    ];

    /* ==========================================================================
       2. RAW ESSAY QUESTIONS - CÔNG NGHỆ 7 (PAGES 3 - 4)
       ========================================================================== */
    const RAW_ESSAYS = [
      {
        id: 'tl-1', num: "Câu 1",
        question: "a) Em hãy nêu lợi ích của trồng trọt đối với đời sống và sản xuất.<br>b) Em hãy nêu hai yêu cầu cơ bản đối với một giống cây trồng tốt.",
        subQuestions: [
          {
            part: "a) Lợi ích của trồng trọt đối với đời sống và sản xuất:",
            hint: `
              <ul>
                <li>Cung cấp lương thực, thực phẩm thiết yếu phục vụ nhu cầu ăn uống hằng ngày của con người (gạo, ngô, rau, củ, quả).</li>
                <li>Cung cấp nguồn thức ăn phong phú cho gia súc, gia cầm và các vật nuôi khác trong ngành chăn nuôi.</li>
                <li>Cung cấp nguồn nguyên liệu quan trọng cho nhiều ngành công nghiệp chế biến và sản xuất (mía đường, bông vải, cao su, chè, cà phê...).</li>
                <li>Tạo thêm nhiều việc làm ổn định, góp phần nâng cao thu nhập và cải thiện đời sống người lao động, tạo nguồn hàng xuất khẩu.</li>
              </ul>
            `
          },
          {
            part: "b) Hai yêu cầu cơ bản đối với một giống cây trồng tốt:",
            hint: `
              <ul>
                <li><strong>Năng suất cao và ổn định:</strong> Giống cây trồng tốt cần cho sản lượng nông sản cao, ổn định phù hợp với điều kiện sản xuất nhất định.</li>
                <li><strong>Chất lượng tốt & chống chịu sâu bệnh:</strong> Nông sản có hàm lượng dinh dưỡng cao, mẫu mã đẹp và cây có khả năng chống chịu tốt với sâu bệnh cũng như các điều kiện thời tiết bất lợi (hạn hán, rét, phèn...).</li>
              </ul>
            `
          }
        ]
      },
      {
        id: 'tl-2', num: "Câu 2",
        question: "Trong quá trình chăm sóc vườn rau, bạn Hoa không làm cỏ và vun xới thường xuyên nên cỏ dại mọc nhiều, đất bị bí chặt. Sau đó, Hoa phát hiện một số lá rau bị thủng nhưng không kiểm tra và xử lí kịp thời. Em hãy đề xuất hai biện pháp phù hợp để giúp cây rau sinh trưởng tốt và hạn chế sâu bệnh.",
        subQuestions: [
          {
            part: "Gợi ý đề xuất giải pháp:",
            hint: `
              <ul>
                <li><strong>Biện pháp 1 (Làm đất & diệt cỏ):</strong> Tiến hành nhổ cỏ dại, xới xáo và vun gốc cho luống rau để loại bỏ sự cạnh tranh dinh dưỡng của cỏ, giúp đất tơi xốp, thoáng khí để bộ rễ phát triển thuận lợi.</li>
                <li><strong>Biện pháp 2 (Quản lý sâu bệnh kịp thời):</strong> Thường xuyên kiểm tra vườn rau; ngắt bỏ những lá bị sâu đục khoét mang đi tiêu hủy; sử dụng các biện pháp an toàn sinh học (bắt sâu bằng tay, phun chế phẩm sinh học thảo mộc như dung dịch gừng - tỏi - ớt) để phòng trừ sâu hại kịp thời mà vẫn an toàn.</li>
              </ul>
            `
          }
        ]
      },
      {
        id: 'tl-3', num: "Câu 3",
        question: "Sau khi gieo hạt rau, bạn Minh tưới nước thật mạnh làm hạt bị trôi và tập trung thành từng đám. Những ngày sau đó, Minh không kiểm tra cây thường xuyên nên một số cây bị sâu ăn lá. Em hãy đề xuất hai biện pháp phù hợp để giúp cây rau sinh trưởng tốt và hạn chế sâu bệnh.",
        subQuestions: [
          {
            part: "Gợi ý đề xuất giải pháp:",
            hint: `
              <ul>
                <li><strong>Biện pháp 1 (Kĩ thuật tưới & điều chỉnh mật độ):</strong> Tưới nhẹ nhàng bằng bình tưới có vòi hoa sen hoặc bình phun sương mịn để tránh làm xói mòn trôi hạt; khi cây con mọc lên cần tỉa bớt cây ở những nơi mọc quá dày và bứng dặm vào những khoảng đất thưa để đảm bảo mật độ cây phát triển đồng đều.</li>
                <li><strong>Biện pháp 2 (Phòng trừ sâu hại sinh học):</strong> Thường xuyên ra thăm vườn kiểm tra tình trạng cây rau; kịp thời ngắt bỏ lá bị sâu cắn phá; sử dụng các chế phẩm sinh học hoặc bẫy bả côn trùng an toàn để diệt sâu hại, bảo vệ môi trường và sức khỏe người tiêu dùng.</li>
              </ul>
            `
          }
        ]
      }
    ];

    /* ==========================================================================
       3. MOBILE FIRST CONTROLLER FOR CÔNG NGHỆ 7
       ========================================================================== */
    class CongNgheQuizApp {
      constructor() {
        this.questions = [];
        this.userAnswers = {}; // { qId: key } or { qId: bool }
        this.flagged = new Set();
        this.filter = 'all';

        this.init();
      }

      init() {
        this.loadQuestions(true);
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
          list = this.shuffle(list);
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
        document.getElementById('themeToggle').addEventListener('click', () => {
          const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
          document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
        });

        document.querySelectorAll('.tab-item').forEach(btn => {
          btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-item').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            this.filter = btn.dataset.filter;
            this.render();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          });
        });

        document.getElementById('btnShuffleAll').addEventListener('click', () => {
          this.loadQuestions(true);
          this.render();
          this.showToast("Đã đảo thứ tự 32 câu và các đáp án A, B, C, D!");
        });

        document.getElementById('btnResetAll').addEventListener('click', () => {
          if (confirm("Làm lại tất cả câu hỏi ôn tập?")) {
            this.userAnswers = {};
            this.render();
            this.showToast("Đã làm mới dữ liệu ôn tập!");
          }
        });

        document.getElementById('btnRestoreOriginal').addEventListener('click', () => {
          this.questions = JSON.parse(JSON.stringify(RAW_QUESTIONS));
          this.userAnswers = {};
          this.render();
          this.showToast("Đã phục hồi đúng thứ tự gốc theo đề cương giấy!");
        });

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

      selectTF(qId, val) {
        this.userAnswers[qId] = val;
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
          const ans = this.userAnswers[q.id];
          if (ans !== undefined) {
            completed++;
            if (q.type === 'single') {
              const isRight = q.options.find(o => o.key === ans)?.isCorrect;
              if (isRight) correct++; else wrong++;
            } else if (q.type === 'tf-item') {
              if (ans === q.isCorrect) correct++; else wrong++;
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
        let hasAnswered = this.userAnswers[q.id] !== undefined;

        if (q.type === 'single') {
          const userChoice = this.userAnswers[q.id];

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
        } else if (q.type === 'tf-item') {
          const userVal = this.userAnswers[q.id];

          let tClasses = 'tf-btn';
          let fClasses = 'tf-btn';

          if (hasAnswered) {
            if (q.isCorrect === true) tClasses += ' correct-choice';
            else fClasses += ' correct-choice';

            if (userVal === true && !q.isCorrect) tClasses += ' wrong-choice';
            if (userVal === false && q.isCorrect) fClasses += ' wrong-choice';
          }

          bodyHTML = `
            <div class="tf-choice-row">
              <button class="${tClasses}" onclick="app.selectTF(${q.id}, true)">
                Đúng (Đ) ${hasAnswered && q.isCorrect === true ? '✓' : ''}
              </button>
              <button class="${fClasses}" onclick="app.selectTF(${q.id}, false)">
                Sai (S) ${hasAnswered && q.isCorrect === false ? '✓' : ''}
              </button>
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

          const ans = this.userAnswers[q.id];
          if (ans !== undefined) {
            if (q.type === 'single') {
              const isRight = q.options.find(o => o.key === ans)?.isCorrect;
              classes += isRight ? ' cell-correct' : ' cell-wrong';
            } else if (q.type === 'tf-item') {
              classes += ans === q.isCorrect ? ' cell-correct' : ' cell-wrong';
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
      app = new CongNgheQuizApp();
    });