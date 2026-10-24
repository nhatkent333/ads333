/* ==========================================================================
       1. DATA DEFINITIONS - KHTN 7 SINH HỌC (33 CÂU HỎI TRẮC NGHIỆM)
       ========================================================================== */
    const RAW_QUESTIONS = [
      {
        id: 1, topic: 'quanghop',
        title: "Với cây xanh, quang hợp có những vai trò nào sau đây?\n(1) Cung cấp nguồn chất hữu cơ làm thức ăn cho sinh vật dị dưỡng.\n(2) Cung cấp khí oxygen.\n(3) Điều hòa trực tiếp mực nước biển.\n(4) Tăng hàm lượng khí carbon dioxide trong không khí.\nCó bao nhiêu nhận định đúng về vai trò của quang hợp?",
        options: [
          { key: 'A', text: "2", isCorrect: true },
          { key: 'B', text: "3", isCorrect: false },
          { key: 'C', text: "4", isCorrect: false },
          { key: 'D', text: "1", isCorrect: false }
        ],
        explanation: "Có 2 nhận định đúng là (1) và (2). Nhận định (3) sai (quang hợp không trực tiếp điều hòa mực nước biển); (4) sai vì quang hợp hấp thụ CO2 và giải phóng O2 giúp cân bằng khí quyển."
      },
      {
        id: 2, topic: 'quanghop',
        title: "Trên thực tế, để thích nghi với điều kiện sống tại môi trường sa mạc, lá của cây xương rồng đã biến đổi thành gai. Vậy cây xương rồng quang hợp chủ yếu bằng bộ phận nào sau đây?",
        options: [
          { key: 'A', text: "Lá cây.", isCorrect: false },
          { key: 'B', text: "Thân cây.", isCorrect: true },
          { key: 'C', text: "Rễ cây.", isCorrect: false },
          { key: 'D', text: "Gai của cây.", isCorrect: false }
        ],
        explanation: "Lá xương rồng tiêu giảm thành gai để hạn chế tối đa sự thoát hơi nước. Thân cây xương rồng biến đổi dày lên, mọng nước và có màu xanh chứa lục lạp đảm nhiệm chức năng quang hợp chính."
      },
      {
        id: 3, topic: 'quanghop',
        title: "Quang hợp ở cây xanh là quá trình chuyển hóa năng lượng từ",
        options: [
          { key: 'A', text: "hóa năng thành quang năng.", isCorrect: false },
          { key: 'B', text: "hóa năng thành nhiệt năng", isCorrect: false },
          { key: 'C', text: "quang năng thành hóa năng", isCorrect: true },
          { key: 'D', text: "quang năng thành nhiệt năng", isCorrect: false }
        ],
        explanation: "Chất diệp lục hấp thụ năng lượng ánh sáng mặt trời (quang năng) và chuyển đổi thành năng lượng hóa học (hóa năng) dự trữ trong các liên kết của hợp chất hữu cơ (glucose, tinh bột)."
      },
      {
        id: 4, topic: 'hohap',
        title: "Nói về hô hấp tế bào, điều nào sau đây không đúng?",
        options: [
          { key: 'A', text: "Quá trình hô hấp tế bào chủ yếu diễn ra trong nhân tế bào.", isCorrect: true },
          { key: 'B', text: "Đó là quá trình biến đổi các chất hữu cơ thành carbon dioxide, nước và giải phóng năng lượng.", isCorrect: false },
          { key: 'C', text: "Nguyên liệu cho quá trình hô hấp là chất hữu cơ và oxygen.", isCorrect: false },
          { key: 'D', text: "Đó là quá trình chuyển hóa năng lượng rất quan trọng của tế bào.", isCorrect: false }
        ],
        explanation: "Phát biểu A không đúng: Ở tế bào nhân thực, quá trình hô hấp tế bào diễn ra chủ yếu ở bào quan TI THỂ (được ví như nhà máy năng lượng của tế bào), không phải trong nhân tế bào."
      },
      {
        id: 5, topic: 'quanghop',
        title: "Quang hợp và hô hấp tế bào khác nhau ở điểm nào?",
        options: [
          { key: 'A', text: "Quang hợp giải phóng ATP, còn hô hấp tế bào dự trữ ATP.", isCorrect: false },
          { key: 'B', text: "Quang hợp sử dụng oxygen, còn hô hấp tế bào tạo ra oxygen.", isCorrect: false },
          { key: 'C', text: "Quang hợp giải phóng năng lượng, còn hô hấp tế bào tích trữ năng lượng.", isCorrect: false },
          { key: 'D', text: "Quang hợp sử dụng khí carbon dioxide, còn hô hấp tế bào tạo ra khí carbon dioxide", isCorrect: true }
        ],
        explanation: "Quang hợp hấp thụ khí carbon dioxide (CO2) để tổng hợp chất hữu cơ và giải phóng O2; ngược lại hô hấp tế bào sử dụng O2 để phân giải chất hữu cơ và tạo ra khí carbon dioxide (CO2)."
      },
      {
        id: 6, topic: 'traodoikhi',
        title: "Khi hô hấp, quá trình trao đổi khí diễn ra như thế nào?",
        options: [
          { key: 'A', text: "Lấy vào khí carbon dioxide, thải ra khí oxygen.", isCorrect: false },
          { key: 'B', text: "Lấy vào khí oxygen, thải ra khí carbon dioxide.", isCorrect: true },
          { key: 'C', text: "Lấy vào khí carbon dioxide và hơi nước.", isCorrect: false },
          { key: 'D', text: "Lấy vào khí oxygen và hơi nước.", isCorrect: false }
        ],
        explanation: "Trong hô hấp, sinh vật lấy khí oxygen từ môi trường để oxy hóa các chất dinh dưỡng và đào thải khí carbon dioxide ra môi trường bên ngoài."
      },
      {
        id: 7, topic: 'hohap',
        title: "Tại sao không nên để nhiều hoa hoặc cây xanh trong phòng ngủ?",
        options: [
          { key: 'A', text: "Cây xanh quang hợp tạo ra nhiều khí oxygen làm tăng cường độ hô hấp trong lúc ngủ.", isCorrect: false },
          { key: 'B', text: "Quá trình hô hấp ở cây xanh tạo ra nhiều khí carbon dioxide làm tăng nồng độ khí carbon dioxide trong môi trường, dễ gây ngạt cho cơ thể trong lúc ngủ.", isCorrect: true },
          { key: 'C', text: "Quá trình hô hấp ở cây xanh tạo ra nhiều khí oxygen làm tăng nồng độ khí oxygen trong môi trường, dễ gây ngạt cho cơ thể trong lúc ngủ.", isCorrect: false },
          { key: 'D', text: "Quá trình quang hợp ở cây xanh tạo ra nhiều khí carbon dioxide làm tăng nồng độ khí carbon dioxide trong môi trường, dễ gây ngạt cho cơ thể trong lúc ngủ.", isCorrect: false }
        ],
        explanation: "Vào ban đêm không có ánh sáng, cây xanh ngừng quang hợp và chỉ thực hiện hô hấp: hấp thu khí O2 và thải nhiều khí CO2. Trong phòng ngủ đóng kín cửa, lượng CO2 tích tụ cao dễ gây ngạt thở, nguy hiểm tính mạng."
      },
      {
        id: 8, topic: 'hohap',
        title: "Đâu là các biện pháp bảo quản nông sản ứng dụng làm chậm quá trình hô hấp tế bào:\n(1) Bảo quản lạnh\n(2) Phơi khô\n(3) Ngâm, muối chua\n(4) Ướp muối\n(5) Bảo quản trong kho kín (nồng độ khí carbon dioxide cao)",
        options: [
          { key: 'A', text: "(1), (3), (5)", isCorrect: false },
          { key: 'B', text: "(1), (2), (5)", isCorrect: true },
          { key: 'C', text: "(2), (4), (5)", isCorrect: false },
          { key: 'D', text: "(2), (3), (4)", isCorrect: false }
        ],
        explanation: "Các biện pháp trực tiếp ức chế hô hấp tế bào nông sản: (1) Hạ nhiệt độ (bảo quản lạnh), (2) Giảm hàm lượng nước (phơi sấy khô), (5) Tăng nồng độ CO2 hoặc rút oxy (kho kín/hút chân không). Muối chua, ướp muối là ức chế vi sinh vật gây thối."
      },
      {
        id: 9, topic: 'hohap',
        title: "Quá trình hô hấp có ý nghĩa",
        options: [
          { key: 'A', text: "Đảm bảo sự cân bằng khí oxygen và khí carbon dioxide trong khí quyển", isCorrect: false },
          { key: 'B', text: "Tạo ra năng lượng cung cấp cho hoạt động sống của các tế bào và cơ thể sinh vật", isCorrect: true },
          { key: 'C', text: "Làm sạch môi trường", isCorrect: false },
          { key: 'D', text: "Chuyển hóa glucose thành khí carbon dioxide và nước", isCorrect: false }
        ],
        explanation: "Ý nghĩa sinh học quan trọng nhất của hô hấp là giải phóng năng lượng dự trữ trong chất hữu cơ thành năng lượng trong phân tử ATP, cung cấp trực tiếp cho mọi hoạt động sống của sinh vật."
      },
      {
        id: 10, topic: 'quanghop',
        title: "Bào quan thực hiện quá trình quang hợp là:",
        options: [
          { key: 'A', text: "Ti thể", isCorrect: false },
          { key: 'B', text: "Lục lạp", isCorrect: true },
          { key: 'C', text: "Khí khổng", isCorrect: false },
          { key: 'D', text: "Tế bào chất", isCorrect: false }
        ],
        explanation: "Lục lạp là bào quan chuyên trách quang hợp ở thực vật và một số nguyên sinh vật, bên trong chứa hệ thống màng thylakoid mang sắc tố diệp lục hấp thụ ánh sáng."
      },
      {
        id: 11, topic: 'quanghop',
        title: "Cho các cây sau:\n(1) Cây rau má\n(2) Cây dừa\n(3) Cây xà cừ\n(4) Cây lá lốt\n(5) Cây trầu không\n(6) Hoa lan\nNhững cây thuộc nhóm thực vật ưa bóng là:",
        options: [
          { key: 'A', text: "(1), (2), (4), (5)", isCorrect: false },
          { key: 'B', text: "(2), (3), (5), (6)", isCorrect: false },
          { key: 'C', text: "(1), (3), (4), (5), (6)", isCorrect: false },
          { key: 'D', text: "(1), (4), (5), (6)", isCorrect: true }
        ],
        explanation: "Rau má, lá lốt, trầu không và hoa lan là thực vật ưa bóng, có khả năng quang hợp tốt dưới cường độ ánh sáng tán xạ yếu. Cây dừa và cây xà cừ là thực vật ưa sáng."
      },
      {
        id: 12, topic: 'quanghop',
        title: "Nguyên liệu của quá trình quang hợp gồm các chất nào sau đây?",
        options: [
          { key: 'A', text: "Khí oxygen và đường", isCorrect: false },
          { key: 'B', text: "Đường và nước", isCorrect: false },
          { key: 'C', text: "Khí cacbonic, nước và năng lượng ánh sáng", isCorrect: false },
          { key: 'D', text: "Khí cacbonic và nước", isCorrect: true }
        ],
        explanation: "Hai chất nguyên liệu trực tiếp tham gia phản ứng quang hợp là Nước (H2O) và Khí cacbonic (CO2). Năng lượng ánh sáng là điều kiện xúc tác, không phải chất nguyên liệu."
      },
      {
        id: 13, topic: 'quanghop',
        title: "Phát biểu nào sau đây là đúng?",
        options: [
          { key: 'A', text: "Trong quá trình quang hợp, cây hấp thụ oxygen để tổng hợp chất hữu cơ", isCorrect: false },
          { key: 'B', text: "Quang hợp là quá trình sinh vật sử dụng ánh sáng để phân giải chất hữu cơ", isCorrect: false },
          { key: 'C', text: "Một trong các sản phẩm của quang hợp là khí oxygen", isCorrect: true },
          { key: 'D', text: "Quang hợp là quá trình sinh lí quan trọng xảy ra trong cơ thể mọi sinh vật", isCorrect: false }
        ],
        explanation: "Phương trình quang hợp: Nước + Carbon dioxide -> Glucose + Oxygen. Vì vậy sản phẩm tạo ra gồm chất hữu cơ (glucose) và khí oxygen."
      },
      {
        id: 14, topic: 'quanghop',
        title: "Quang hợp và hô hấp tế bào khác nhau ở điểm nào?",
        options: [
          { key: 'A', text: "Quang hợp giải phóng ATP, còn hô hấp tế bào dự trữ ATP.", isCorrect: false },
          { key: 'B', text: "Quang hợp sử dụng oxygen, còn hô hấp tế bào tạo ra oxygen.", isCorrect: false },
          { key: 'C', text: "Quang hợp giải phóng năng lượng, còn hô hấp tế bào tích trữ năng lượng.", isCorrect: false },
          { key: 'D', text: "Quang hợp sử dụng khí carbon dioxide, còn hô hấp tế bào tạo ra khí carbon dioxide", isCorrect: true }
        ],
        explanation: "Quang hợp tiêu thụ CO2 để tổng hợp chất hữu cơ; hô hấp tế bào lại phân giải chất hữu cơ và thải ra CO2."
      },
      {
        id: 15, topic: 'hohap',
        title: "Ở tế bào nhân thực, hoạt động hô hấp xảy ra ở",
        options: [
          { key: 'A', text: "Ti thể", isCorrect: true },
          { key: 'B', text: "Ribôxôm", isCorrect: false },
          { key: 'C', text: "Không bào", isCorrect: false },
          { key: 'D', text: "Lục lạp", isCorrect: false }
        ],
        explanation: "Ti thể là bào quan có màng kép mang chuỗi truyền electron hô hấp và các enzyme oxy hóa hoàn toàn pyruvate thành CO2, H2O và tích lũy phần lớn ATP."
      },
      {
        id: 16, topic: 'traodoikhi',
        title: "Tác nhân nào dưới đây không gây hại cho đường dẫn khí?",
        options: [
          { key: 'A', text: "Bụi.", isCorrect: false },
          { key: 'B', text: "Vi khuẩn.", isCorrect: false },
          { key: 'C', text: "Khói thuốc lá.", isCorrect: false },
          { key: 'D', text: "Khí oxygen.", isCorrect: true }
        ],
        explanation: "Khí oxygen (O2) là khí cần thiết duy trì sự sống và hoạt động của tế bào cơ thể, không phải tác nhân ô nhiễm hay gây hại cho đường thở."
      },
      {
        id: 17, topic: 'traodoikhi',
        title: "Trao đổi khí ở thực vật diễn ra thông qua quá trình nào?",
        options: [
          { key: 'A', text: "Quang hợp và thoát hơi nước.", isCorrect: false },
          { key: 'B', text: "Hô hấp.", isCorrect: false },
          { key: 'C', text: "Thoát hơi nước.", isCorrect: false },
          { key: 'D', text: "Quang hợp và hô hấp.", isCorrect: true }
        ],
        explanation: "Thực vật thực hiện trao đổi khí chủ yếu qua khí khổng trong 2 quá trình cơ bản: quang hợp (hấp thu CO2, thải O2) và hô hấp (hấp thu O2, thải CO2)."
      },
      {
        id: 18, topic: 'traodoikhi',
        title: "Trong quá trình trao đổi khí ở tế bào, loại khí nào sẽ khuếch tán từ máu vào tế bào?",
        options: [
          { key: 'A', text: "Khí nitrogen", isCorrect: false },
          { key: 'B', text: "Khí carbon dioxide", isCorrect: false },
          { key: 'C', text: "Khí oxygen", isCorrect: true },
          { key: 'D', text: "Khí hydrogen", isCorrect: false }
        ],
        explanation: "Máu đỏ tươi giàu O2 khi chảy qua mao mạch mô sẽ khuếch tán O2 vào tế bào để tế bào hô hấp; đồng thời nhận CO2 từ tế bào khuếch tán vào máu."
      },
      {
        id: 19, topic: 'hohap',
        title: "Cơ sở khoa học của các biện pháp bảo quản nông sản là",
        options: [
          { key: 'A', text: "tăng nhẹ cường độ hô hấp tế bào.", isCorrect: false },
          { key: 'B', text: "giảm nhẹ cường độ hô hấp tế bào.", isCorrect: false },
          { key: 'C', text: "giảm cường độ hô hấp tế bào tới mức tối thiểu.", isCorrect: true },
          { key: 'D', text: "tăng cường độ hô hấp tế bào tới mức tối đa.", isCorrect: false }
        ],
        explanation: "Hô hấp làm tiêu hao chất dinh dưỡng và sinh nhiệt ẩm gây nảy mầm/thối mốc. Do đó cần đưa cường độ hô hấp về mức tối thiểu để bảo quản nông sản được lâu nhất mà không làm hạt bị chết."
      },
      {
        id: 20, topic: 'hohap',
        title: "Quá trình chuyển hóa năng lượng nào sau đây diễn ra trong hô hấp tế bào?",
        options: [
          { key: 'A', text: "Nhiệt năng -> hóa năng.", isCorrect: false },
          { key: 'B', text: "Hóa năng -> điện năng.", isCorrect: false },
          { key: 'C', text: "Hóa năng -> nhiệt năng.", isCorrect: true },
          { key: 'D', text: "Quang năng -> hóa năng.", isCorrect: false }
        ],
        explanation: "Trong hô hấp tế bào, hóa năng tích trữ trong liên kết của chất hữu cơ được phân giải một phần thành hóa năng trong ATP và một phần giải phóng ra dưới dạng nhiệt năng."
      },
      {
        id: 21, topic: 'quanghop',
        title: "Khi thực vật thiếu nước sẽ xảy ra hiện tượng:",
        options: [
          { key: 'A', text: "Khí khổng đóng lại, hàm lượng carbon dioxide đi vào lá giảm, tăng cường độ quang hợp của cây xanh.", isCorrect: false },
          { key: 'B', text: "Khí khổng mở ra, hàm lượng carbon dioxide đi vào lá tăng, quang hợp của cây gặp khó khăn.", isCorrect: false },
          { key: 'C', text: "Khí khổng mở ra, hàm lượng carbon dioxide đi vào lá tăng, tăng cường độ quang hợp của cây xanh.", isCorrect: false },
          { key: 'D', text: "Khí khổng đóng lại, hàm lượng carbon dioxide đi vào lá giảm, quang hợp của cây gặp khó khăn.", isCorrect: true }
        ],
        explanation: "Khi thiếu nước, tế bào hạt đậu ở khí khổng mất nước xẹp xuống làm lỗ khí đóng lại để chống mất nước; điều này cản trở CO2 khuếch tán vào lá, khiến quang hợp bị đình trệ, giảm sút."
      },
      {
        id: 22, topic: 'hohap',
        title: "Tại sao cần hạn chế hô hấp tế bào trong quá trình bảo quản nông sản?",
        options: [
          { key: 'A', text: "Hô hấp tế bào làm tiêu hao lượng chất hữu cơ và chất dinh dưỡng có trong nông sản.", isCorrect: true },
          { key: 'B', text: "Hô hấp tế bào khiến nông sản mất mùi vị trong thời gian dài bảo quản", isCorrect: false },
          { key: 'C', text: "Hô hấp tế bào khiến nông sản không bảo quản được lâu.", isCorrect: false },
          { key: 'D', text: "Hô hấp tế bào thải ra môi trường lượng lớn carbon dioxide gây ngộ độc cho con người.", isCorrect: false }
        ],
        explanation: "Hô hấp phân giải trực tiếp các chất hữu cơ dự trữ (tinh bột, đường, protein, lipid...) trong nông sản, làm sụt giảm khối lượng và chất lượng sản phẩm."
      },
      {
        id: 23, topic: 'traodoikhi',
        title: "Phân tử nước được tạo thành từ:",
        options: [
          { key: 'A', text: "Một nguyên tử oxygen liên kết với hai nguyên tử hydrogen bằng liên kết cộng hoá trị.", isCorrect: true },
          { key: 'B', text: "Một nguyên tử nitrogen liên kết với ba nguyên tử hydrogen bằng liên kết cộng hoá trị.", isCorrect: false },
          { key: 'C', text: "Một nguyên tử oxygen liên kết với hai nguyên tử hydrogen bằng liên kết ion.", isCorrect: false },
          { key: 'D', text: "Một nguyên tử oxygen liên kết với hai nguyên tử hydrogen bằng liên kết hydrogen.", isCorrect: false }
        ],
        explanation: "Phân tử nước (H2O) gồm 1 nguyên tử oxygen liên kết với 2 nguyên tử hydrogen bằng hai liên kết cộng hóa trị có cực."
      },
      {
        id: 24, topic: 'quanghop',
        title: "Đặc điểm nào của lá cây phù hợp với chức năng quang hợp?\n1. Lá cây dạng bản dẹt giúp thu nhận được nhiều ánh sáng.\n2. Các tế bào ở lớp giữa của lá có nhiều lục lạp.\n3. Lục lạp chứa chất diệp lục thu nhận ánh sáng dùng cho tổng hợp chất hữu cơ của lá cây.\n4. Khí khổng phân bố trên bề mặt của lá có vai trò chính trong quá trình trao đổi khí và thoát hơi nước.\n5. Gân lá (mạch dẫn) có chức năng vận chuyển nước đến lục lạp và vận chuyển chất hữu cơ từ lục lạp về cuống lá, từ đó vận chuyển đến các bộ phận khác của cây.\nSố đáp án đúng là",
        options: [
          { key: 'A', text: "2.", isCorrect: false },
          { key: 'B', text: "3", isCorrect: false },
          { key: 'C', text: "4.", isCorrect: false },
          { key: 'D', text: "5.", isCorrect: true }
        ],
        explanation: "Cả 5 đặc điểm trên đều là các thích nghi giải phẫu - sinh lí hoàn hảo của lá cây giúp tối ưu hóa việc hấp thụ ánh sáng, trao đổi khí, dẫn nước và vận chuyển sản phẩm quang hợp."
      },
      {
        id: 25, topic: 'quanghop',
        title: "Loài sinh vật nào sau đây có khả năng quang hợp?",
        options: [
          { key: 'A', text: "Cá chép.", isCorrect: false },
          { key: 'B', text: "Trùng roi.", isCorrect: true },
          { key: 'C', text: "Voi.", isCorrect: false },
          { key: 'D', text: "Nấm rơm.", isCorrect: false }
        ],
        explanation: "Trùng roi xanh (Euglena) trong nguyên sinh vật có chứa thể hạt màu lục mang diệp lục, ngoài tự nhiên có ánh sáng chúng dinh dưỡng theo kiểu tự dưỡng quang hợp."
      },
      {
        id: 26, topic: 'quanghop',
        title: "Nhiệt độ thuận lợi nhất cho hầu hết các loài cây quang hợp là",
        options: [
          { key: 'A', text: "35°C - 45°C", isCorrect: false },
          { key: 'B', text: "15°C - 25°C", isCorrect: false },
          { key: 'C', text: "20°C - 35°C", isCorrect: false },
          { key: 'D', text: "25°C - 35°C", isCorrect: true }
        ],
        explanation: "Khoảng nhiệt độ từ 25°C đến 35°C là tối ưu để các enzyme xúc tác cho pha sáng và pha tối của quang hợp hoạt động với hiệu suất cao nhất."
      },
      {
        id: 27, topic: 'traodoikhi',
        title: "Sắp xếp các bộ phận sau theo đúng thứ tự của cơ quan hô hấp ở người: phổi, khí quản, khoang mũi, thanh quản, phế quản.",
        options: [
          { key: 'A', text: "Khoang mũi, khí quản, thanh quản, phế quản, phổi", isCorrect: false },
          { key: 'B', text: "Khoang mũi, thanh quản, khí quản, phế quản, phổi.", isCorrect: true },
          { key: 'C', text: "Khoang mũi, phế quản, khí quản, thanh quản, phổi.", isCorrect: false },
          { key: 'D', text: "Khoang mũi, phổi, khí quản, thanh quản, phế quản.", isCorrect: false }
        ],
        explanation: "Dòng khí hít vào theo thứ tự giải phẫu: Khoang mũi -> Thanh quản -> Khí quản -> Phế quản (phân nhánh) -> Phổi (các phế nang)."
      },
      {
        id: 28, topic: 'traodoikhi',
        title: "Sự trao đổi khí giữa môi trường và mạch máu diễn ra ở đâu?",
        options: [
          { key: 'A', text: "Phế nang.", isCorrect: true },
          { key: 'B', text: "Phế quản.", isCorrect: false },
          { key: 'C', text: "Khí quản.", isCorrect: false },
          { key: 'D', text: "Khoang mũi.", isCorrect: false }
        ],
        explanation: "Phế nang là đơn vị chức năng của phổi, có vách mỏng 1 lớp biểu mô và bao quanh bởi mạng lưới mao mạch dày đặc, nơi diễn ra trao đổi O2 và CO2 theo cơ chế khuếch tán."
      },
      {
        id: 29, topic: 'quanghop',
        title: "Cường độ ánh sáng tăng quá cao thì cây xanh",
        options: [
          { key: 'A', text: "Ngừng quang hợp", isCorrect: false },
          { key: 'B', text: "Quang hợp giảm", isCorrect: true },
          { key: 'C', text: "Quang hợp tăng", isCorrect: false },
          { key: 'D', text: "Quang hợp đạt mức cực đại", isCorrect: false }
        ],
        explanation: "Khi cường độ ánh sáng vượt quá điểm bão hòa, nhiệt độ lá tăng cao làm khí khổng đóng để giữ nước và sắc tố diệp lục bị quang oxy hóa phá hủy, khiến cường độ quang hợp bị giảm sút."
      },
      {
        id: 30, topic: 'hohap',
        title: "Phương trình tổng quát của quá trình hô hấp tế bào thể hiện như sau:\nKhí oxygen + ? -> Khí carbon dioxide + Nước + Năng lượng (ATP và nhiệt)\nChất ? trong phương trình trên là",
        options: [
          { key: 'A', text: "ATP", isCorrect: false },
          { key: 'B', text: "Carbon dioxide.", isCorrect: false },
          { key: 'C', text: "Glucose.", isCorrect: true },
          { key: 'D', text: "Muối khoáng.", isCorrect: false }
        ],
        explanation: "Chất hữu cơ phân giải chủ yếu trong hô hấp tế bào là phân tử đường Glucose (C6H12O6)."
      },
      {
        id: 31, topic: 'hohap',
        title: "Tại sao người nông dân thường dùng biện pháp phơi khô để bảo quản hạt trong thời gian dài?",
        options: [
          { key: 'A', text: "Nhiệt độ cao trong quá trình phơi làm chết tế bào, giúp giữ nguyên hình dạng hạt trong thời gian dài.", isCorrect: false },
          { key: 'B', text: "Phơi khô giúp làm giảm lượng nước trong hạt phòng chống ẩm mốc hại.", isCorrect: false },
          { key: 'C', text: "Phơi khô giúp làm giảm lượng nước trong hạt, chậm quá trình hô hấp tế bào của hạt, hạt rơi vào trạng thái ngủ, phòng chống ẩm mốc, giúp bảo quản hạt giống trong thời gian dài.", isCorrect: true },
          { key: 'D', text: "Nhiệt độ cao trong quá trình phơi giúp ức chế quá trình hô hấp tế bào của hạt và giúp tiêu diệt bào tử nấm mốc xung quanh hạt.", isCorrect: false }
        ],
        explanation: "Hàm lượng nước quyết định cường độ hô hấp của hạt. Phơi khô làm giảm độ ẩm hạt xuống 12-14%, ức chế hô hấp tế bào và đưa phôi hạt vào trạng thái tiềm sinh (ngủ nghỉ), vừa ngừa nấm mốc vừa bảo tồn sức nảy mầm sau này."
      },
      {
        id: 32, topic: 'traodoikhi',
        title: "Đặc điểm thể hiện tính phân cực của phân tử nước là:",
        options: [
          { key: 'A', text: "Cặp electron trong liên kết cộng hoá trị bị lệch về phía nguyên tử hydrogen nên đầu mang nguyên tử hydrogen của phân tử nước tích điện âm còn đầu mang nguyên tử oxygen không mang điện tích.", isCorrect: false },
          { key: 'B', text: "Cặp electron trong liên kết cộng hoá trị chia đều về các phía nên đầu mang nguyên tử hydrogen của phân tử nước tích điện âm còn đầu mang nguyên tử oxygen tích điện dương.", isCorrect: false },
          { key: 'C', text: "Cặp electron trong liên kết cộng hoá trị bị lệch về phía nguyên tử oxygen nên đầu mang nguyên tử oxygen của phân tử nước tích điện âm còn đầu mang nguyên tử hydrogen tích điện dương.", isCorrect: true },
          { key: 'D', text: "Cặp electron trong liên kết cộng hoá trị bị lệch về phía nguyên tử hydrogen nên đầu mang nguyên tử hydrogen của phân tử nước tích điện âm còn đầu mang nguyên tử oxygen tích điện dương.", isCorrect: false }
        ],
        explanation: "Do nguyên tử oxygen có độ âm điện mạnh hơn nguyên tử hydrogen nên cặp electron dùng chung bị kéo lệch về phía O. Kết quả là đầu O tích điện âm một phần (δ-) và hai đầu H tích điện dương một phần (δ+), tạo nên tính phân cực của phân tử nước."
      },
      {
        id: 33, topic: 'quanghop',
        title: "Trong quá trình quang hợp ở thực vật, các khí được trao đổi qua khí khổng như thế nào?",
        options: [
          { key: 'A', text: "carbon dioxide và oxygen khuếch tán từ môi trường vào trong tế bào lá, hơi nước thoát ra ngoài.", isCorrect: false },
          { key: 'B', text: "oxygen và carbon dioxide khuếch tán từ trong tế bào lá ra môi trường.", isCorrect: false },
          { key: 'C', text: "oxygen khuếch tán từ môi trường vào trong tế bào lá, carbon dioxide khuếch tán từ trong tế bào lá ra môi trường.", isCorrect: false },
          { key: 'D', text: "carbon dioxide khuếch tán từ môi trường vào trong tế bào lá, oxygen khuếch tán từ trong tế bào lá ra môi trường.", isCorrect: true }
        ],
        explanation: "Trong quang hợp, khí carbon dioxide (CO2) từ không khí khuếch tán qua lỗ khí khổng vào tế bào lá làm nguyên liệu; khí oxygen (O2) được tạo ra từ quang phân li nước sẽ khuếch tán từ tế bào lá qua khí khổng ra môi trường ngoài."
      }
    ];

    /* ==========================================================================
       2. MOBILE FIRST CONTROLLER FOR SINH HỌC 7
       ========================================================================== */
    class SinhHocQuizApp {
      constructor() {
        this.questions = [];
        this.userAnswers = {}; // { qId: key }
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
            if (Array.isArray(q.options)) {
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
          this.showToast("Đã đảo thứ tự 33 câu và các đáp án A, B, C, D!");
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
            const isRight = q.options.find(o => o.key === ans)?.isCorrect;
            if (isRight) correct++; else wrong++;
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

        let list = this.questions;
        if (this.filter !== 'all') {
          list = this.questions.filter(q => q.topic === this.filter);
        }

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
        const userChoice = this.userAnswers[q.id];
        const hasAnswered = userChoice !== undefined;

        const topicLabels = {
          'quanghop': 'Quang hợp',
          'hohap': 'Hô hấp tế bào',
          'traodoikhi': 'Trao đổi khí'
        };

        const bodyHTML = `
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

        // Format multiline question titles cleanly
        const formattedTitle = q.title.replace(/\n/g, '<br>');

        return `
          <div class="q-card" id="card-${q.id}">
            <div class="q-top">
              <div class="q-badge-group">
                <span class="q-num-tag" data-index="${displayIdx}">Câu ${displayIdx}</span>
                <span class="q-topic-tag">${topicLabels[q.topic] || 'Sinh học 7'}</span>
              </div>
              <button class="btn-bookmark ${isFlag ? 'active' : ''}" onclick="app.toggleBookmark(${q.id})" title="Đánh dấu câu này">
                ${isFlag ? '★' : '☆'}
              </button>
            </div>

            <div class="q-text">${formattedTitle}</div>
            ${bodyHTML}

            <div class="explanation-panel ${hasAnswered ? 'visible' : ''}">
              <strong>💡 Giải thích chi tiết:</strong>
              ${q.explanation}
            </div>
          </div>
        `;
      }

      renderDrawerGrid() {
        const grid = document.getElementById('drawerGrid');
        grid.innerHTML = this.questions.map((q, i) => {
          let classes = 'grid-cell';
          if (this.flagged.has(q.id)) classes += ' cell-flagged';

          const ans = this.userAnswers[q.id];
          if (ans !== undefined) {
            const isRight = q.options.find(o => o.key === ans)?.isCorrect;
            classes += isRight ? ' cell-correct' : ' cell-wrong';
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
        if (this.filter !== 'all') {
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
      app = new SinhHocQuizApp();
    });