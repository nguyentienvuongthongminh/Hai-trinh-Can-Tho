/* DATA SET FOR CAN THO LANDMARKS */
const LANDMARKS = [
    {
        id: 0,
        name: "Bến Ninh Kiều",
        images: [
            "https://tse4.mm.bing.net/th/id/OIP.02b1Kr1ZmdOVlVVxaNmTeQHaEf?r=0&pid=Api&h=220&P=0",
            "https://tse3.mm.bing.net/th/id/OIP.Qq10FWCG37zVTwGPZXTiTwHaEV?r=0&pid=Api&h=220&P=0",
            "https://tse2.mm.bing.net/th/id/OIP.7bpGjCBRnul9NYG4putGrQHaEe?r=0&pid=Api&h=220&P=0"
        ],
        questions: {
            easy: [
                { q: "Bến Ninh Kiều nằm cạnh bờ sông nào nổi tiếng ở Cần Thơ?", options: ["Sông Hồng", "Sông Hậu", "Sông Đồng Nai", "Sông Tiền"], answer: 1 },
                { q: "Công trình nào tượng trưng cho lòng biết ơn Bác Hồ nằm tại Bến Ninh Kiều?", options: ["Lăng Chủ Tịch", "Cột Cờ", "Tượng đài Bác Hồ", "Tháp Rùa"], answer: 2 },
                { q: "Bến Ninh Kiều là một địa danh nổi tiếng thuộc phường nào của TP Cần Thơ?", options: ["Ninh Kiều", "Bình Thủy", "Ô Môn", "Cái Răng"], answer: 0 },
                { q: "Về đêm, Bến Ninh Kiều rực rỡ bởi công trình cầu đi bộ còn có tên gọi lãng mạn là gì?", options: ["Cầu Mỹ Thuận", "Cầu Vàng", "Cầu Tình Yêu", "Cầu Rồng"], answer: 2 },
                { q: "Phương tiện du lịch sông nước phổ biến hàng đêm tại Bến Ninh Kiều là gì?", options: ["Tàu hỏa", "Cáp treo", "Thuyền buồm lớn", "Du thuyền Bến Ninh Kiều"], answer: 3 }
            ],
            medium: [
                { q: "Tên gọi 'Ninh Kiều' gắn liền với sự kiện lịch sử/bài thơ nào trong lịch sử Việt Nam?", options: ["Bình Ngô Đại Cáo của Nguyễn Trãi", "Nam Quốc Sơn Hà", "Truyện Kiều", "Chuyện cũ Ninh Kiều"], answer: 0 },
                { q: "Bến Ninh Kiều được công nhận là di tích cấp nào?", options: ["Di sản thế giới", "Cấp Tỉnh/Thành Phố", "Cấp Quốc Gia", "Chưa xếp hạng"], answer: 1 },
                { q: "Phố đi bộ và chợ đêm Ninh Kiều thường hoạt động nhộn nhịp nhất vào khoảng thời gian nào?", options: ["Buổi trưa", "Nửa đêm đến sáng", "Buổi sáng", "Buổi chiều tối"], answer: 3 },
                { q: "Cầu đi bộ Ninh Kiều kết nối khu vực Bến Ninh Kiều với địa điểm nào?", options: ["Cồn Cái Khế", "Cái Răng", "Cồn Khương", "Vĩnh Long"], answer: 0 },
                { q: "Du thuyền nổi trên sông Hậu tại Bến Ninh Kiều mang phong cách thiết kế độc đáo nào?", options: ["Tàu ngầm", "Du thuyền Châu Âu", "Tàu hải tặc", "Thuyền rồng kết hợp hiện đại"], answer: 3 }
            ],
            hard: [
                { q: "Bến Ninh Kiều xưa kia còn có tên gọi dân gian là gì dưới thời Pháp thuộc?", options: ["Bến Sông Hậu", "Bến Thủy", "Bến Tàu", "Bến Hàng Dương"], answer: 3 },
                { q: "Năm nào bến Hàng Dương chính thức được đổi tên thành Bến Ninh Kiều?", options: ["1986", "1945", "1975", "1958"], answer: 3 },
                { q: "Cầu đi bộ Ninh Kiều có hình dáng thiết kế uốn lượn tượng trưng cho hình chữ gì?", options: ["Chữ O", "Chữ C", "Chữ S", "Chữ V"], answer: 2 },
                { q: "Điểm nhấn kiến trúc nổi bật giữa cầu đi bộ Ninh Kiều là hai đài biểu tượng cho hoa gì?", options: ["Hoa Cúc", "Hoa Hướng Dương", "Hoa Mai", "Hoa Sen"], answer: 3 },
                { q: "Chiều dài của Cầu đi bộ Ninh Kiều nối bến Ninh Kiều với Cù lao Cái Khát xấp xỉ bao nhiêu mét?", options: ["Khoảng 200m", "Khoảng 500m", "Khoảng 100m", "Khoảng 1000m"], answer: 0 }
            ]
        }
    },
    {
        id: 1,
        name: "Chợ Nổi Cái Răng",
        images: [
            "https://tse4.mm.bing.net/th/id/OIP.RLMJT8JZGtPxMA5TLDPqKAHaFj?r=0&pid=Api&h=220&P=0",
            "https://tse2.mm.bing.net/th/id/OIP.-1W3cbiTLWNUJ4rA6B3xLAHaE8?r=0&pid=Api&h=220&P=0"
        ],
        questions: {
            easy: [
                { q: "Chợ Nổi Cái Răng là loại hình chợ đặc trưng diễn ra ở đâu?", options: ["Trong nhà", "Trên cạn", "Trên núi", "Trên sông"], answer: 3 },
                { q: "Để quảng bá sản phẩm bán trên ghe thuyền, người buôn bán ở Chợ Nổi Cái Răng dùng vật dụng gì?", options: ["Bảng hiệu đèn Led", "Cờ hiệu", "Loa phát thanh", "Cây Bẹo"], answer: 3 },
                { q: "Món ăn sáng nổi tiếng được siêu đầu bếp Gordon Ramsay khen ngợi hết lời tại Chợ Nổi là gì?", options: ["Phở bò", "Bún chả", "Hủ tiếu / Bún riêu", "Bánh mì"], answer: 2 },
                { q: "Thời điểm tham quan Chợ Nổi Cái Răng nhộn nhịp nhất trong ngày là khi nào?", options: ["Buổi tối", "Buổi chiều", "Buổi trưa", "Sáng sớm (5h - 7h)"], answer: 3 },
                { q: "Chợ Nổi Cái Răng nằm trên dòng sông nào?", options: ["Sông Cần Thơ", "Sông Hồng", "Sông Tiền", "Sông Sài Gòn"], answer: 0 }
            ],
            medium: [
                { q: "Văn hóa Chợ nổi Cái Răng đã được công nhận là Di sản văn hóa phi vật thể quốc gia vào năm nào?", options: ["2016", "2020", "2005", "2010"], answer: 0 },
                { q: "Tục ngữ chợ nổi: 'Treo gì bán nấy, treo gì không bán...':", options: ["Treo lá không bán cây", "Treo bẹo bán thuyền", "Treo quần áo không bán", "Treo cái gì bán cái đó"], answer: 2 },
                { q: "Tên gọi 'Cái Răng' theo thuyết dân gian có nguồn gốc từ từ tiếng Khmer nào?", options: ["Prek", "Angkor", "Phnom", "Karan (cà ràng)"], answer: 3 },
                { q: "Sản phẩm chính được giao dịch bán sỉ nhiều nhất tại Chợ Nổi Cái Răng là gì?", options: ["Đồ điện tử", "Đồ gia dụng", "Nông sản, trái cây miền Tây", "Quần áo thời trang"], answer: 2 },
                { q: "Khoảng cách di chuyển bằng thuyền từ Bến Ninh Kiều đến Chợ Nổi Cái Răng khoảng bao lâu?", options: ["5 phút", "30 phút", "2 tiếng", "4 tiếng"], answer: 1 }
            ],
            hard: [
                { q: "Ngày xưa, người dân thường dùng loại phương tiện nào để đi lại và họp chợ nổi Cái Răng?", options: ["Tàu ngầm", "Cano", "Xuồng ba lá, xuồng năm lá, ghe tam bản", "Thuyền thúng"], answer: 2 },
                { q: "Chợ nổi Cái Răng ban đầu nằm ở ngã ba sông nào trước khi di chuyển đến vị trí hiện tại?", options: ["Ngã năm", "Ngã tư", "Ngã bảy", "Ngã ba Cần Thơ - Cái Răng"], answer: 3 },
                { q: "'Bẹo' trong từ 'Cây bẹo' ở chợ nổi có nghĩa là gì theo tiếng địa phương?", options: ["Buộc chặt", "Giấu đi", "Chưng ra, khoe ra", "Treo cao"], answer: 2 },
                { q: "Trên cây bẹo, nếu treo một chiếc lá tợp/bùa thì có ý nghĩa kỳ lạ gì?", options: ["Bán đồ ăn", "Không bán gì", "Bán chính chiếc ghe/thuyền đó", "Bán trái cây"], answer: 2 },
                { q: "Tạp chí du lịch nổi tiếng thế giới nào từng bình chọn Chợ nổi Cái Răng vào top 10 chợ ấn tượng nhất?", options: ["Rough Guides", "National Geographic", "Lonely Planet", "Forbes"], answer: 0 }
            ]
        }
    },
    {
        id: 2,
        name: "Nhà Cổ Bình Thủy",
        images: [
            "https://tse1.mm.bing.net/th/id/OIP.xvv2LQDA3rojpzIxEYBuLAHaFT?r=0&pid=Api&h=220&P=0",
            "https://tse4.mm.bing.net/th/id/OIP.BgOBEaPEWRjPzhkL1sQ1fgHaEK?r=0&pid=Api&h=220&P=0"
        ],
        questions: {
            easy: [
                { q: "Nhà Cổ Bình Thủy thuộc gia tộc họ nào sở hữu qua nhiều thế hệ?", options: ["Họ Trần", "Họ Dương", "Họ Lê", "Họ Nguyễn"], answer: 1 },
                { q: "Nhà Cổ Bình Thủy nổi tiếng vì kết hợp kiến trúc giữa phương Đông và phương nào?", options: ["Phương Tây (Pháp)", "Châu Mỹ", "Châu Phi", "Phương Bắc"], answer: 0 },
                { q: "Ngôi nhà cổ này nổi tiếng từng là bối cảnh cho bộ phim điện ảnh quốc tế nổi tiếng nào?", options: ["Người Tình (L'Amant)", "Mùi Đu Đủ Xanh", "Áo Lụa Hà Đông", "Đất Phương Nam"], answer: 0 },
                { q: "Nhà Cổ Bình Thủy nằm tại phường nào của TP Cần Thơ?", options: ["Ninh Kiều", "Phong Điền", "Bình Thủy", "Thốt Nốt"], answer: 2 },
                { q: "Nền gạch hoa trong Nhà Cổ Bình Thủy được nhập khẩu trực tiếp từ quốc gia nào?", options: ["Trung Quốc", "Nhật Bản", "Pháp", "Anh"], answer: 2 }
            ],
            medium: [
                { q: "Nhà cổ Bình Thủy được khởi công xây dựng vào năm 1870 bởi ai?", options: ["Ông Dương Chấn Kỷ", "Ông Dương Văn Ngôn", "Ông Dương Minh Hiển", "Ông Dương Văn Vị"], answer: 3 },
                { q: "Cổng chính nhà cổ Bình Thủy được thiết kế mang nét độc đáo nào?", options: ["Cổng tam quan truyền thống", "Kiến trúc Bút Tháp - Dinh thự phương Tây", "Cổng vòm La Mã", "Cổng gỗ Nhật"], answer: 1 },
                { q: "Trong sân nhà cổ Bình Thủy có cây xương rồng Kim Long đặc biệt cao bao nhiêu mét?", options: ["Hơn 8 mét", "20 mét", "1 mét", "15 mét"], answer: 0 },
                { q: "Bộ bàn ghế đá cẩm thạch màu xanh quý hiếm trong nhà cổ có nguồn gốc từ đâu?", options: ["Ý", "Vân Nam (Trung Quốc)", "Ấn Độ", "Pháp"], answer: 1 },
                { q: "Kiến trúc tổng thể gian nhà chính của Nhà Cổ Bình Thủy gồm mấy gian?", options: ["9 gian", "3 gian", "7 gian", "5 gian"], answer: 3 }
            ],
            hard: [
                { q: "Tên gọi gốc trước đây của khu vực Bình Thủy do nhà Nguyễn đặt là gì?", options: ["Tây Đô", "Tân An", "Long Tuyền", "An Thới"], answer: 2 },
                { q: "Toàn bộ hệ thống cột đà trong Nhà cổ Bình Thủy được làm bằng loại gỗ quý nào?", options: ["Gỗ tre", "Gỗ thông", "Gỗ gõ đỏ / Lim", "Gỗ cao su"], answer: 2 },
                { q: "Ngoài phim 'Người Tình', bộ phim truyền hình Việt Nam rất nổi tiếng nào cũng quay tại đây?", options: ["Về Nhà Đi Con", "Đất Phương Nam", "Hướng Dương Ngược Nắng", "Người Đẹp Tây Đô"], answer: 3 },
                { q: "Bậc thang dẫn lên sảnh chính của Nhà Cổ Bình Thủy có thiết kế hình dáng đặc biệt nào?", options: ["Hình tròn", "Cánh cung đối xứng hai bên", "Xoắn ốc", "Tam cấp thẳng"], answer: 1 },
                { q: "Nhà Cổ Bình Thủy được xếp hạng Di tích kiến trúc nghệ thuật cấp Quốc gia vào năm nào?", options: ["1995", "2009", "2000", "2018"], answer: 1 }
            ]
        }
    },
    {
        id: 3,
        name: "Cồn Sơn",
        images: [
            "https://tse3.mm.bing.net/th/id/OIP.Y4SteXPr80toMIJu3HemOwHaE8?r=0&pid=Api&h=220&P=0",
            "https://tse4.mm.bing.net/th/id/OIP.8rI31xBEs2x_D80JNkvN7QHaDs?r=0&pid=Api&h=220&P=0"
        ],
        questions: {
            easy: [
                { q: "Cồn Sơn là một cù lao trù phú nằm giữa dòng sông nào?", options: ["Sông Đà", "Sông Hậu", "Sông Mê Kông", "Sông Tiền"], answer: 1 },
                { q: "Trải nghiệm độc đáo nổi tiếng nhất ở Cồn Sơn xem loài động vật nào 'bay'?", options: ["Tôm bay", "Gà bay", "Thỏ bay", "Cá lóc bay"], answer: 3 },
                { q: "Cồn Sơn thuộc phường nào của TP Cần Thơ?", options: ["Ninh Kiều", "Ô Môn", "Bình Thủy", "Thốt Nốt"], answer: 2 },
                { q: "Đến Cồn Sơn, du khách thường trải nghiệm tự tay làm món ăn gì truyền thống?", options: ["Pizza", "Các loại Bánh dân gian Nam Bộ", "Phở", "Bánh chưng"], answer: 1 },
                { q: "Phương tiện chính để sang tham quan Cồn Sơn là gì?", options: ["Xe máy", "Xe buýt", "Tàu hỏa", "Đò / Đò ngang"], answer: 3 }
            ],
            medium: [
                { q: "Mô hình du lịch ở Cồn Sơn nổi tiếng cả nước vì mang tính chất gì?", options: ["Du lịch tâm linh", "Du lịch nghỉ dưỡng 5 sao", "Du lịch mạo hiểm", "Du lịch cộng đồng sinh thái"], answer: 3 },
                { q: "'Cá massage' tại các bè cá Cồn Sơn thuộc loại cá nào?", options: ["Cá mập", "Cá trê", "Cá sấu", "Cá koi / Cá vảnh"], answer: 3 },
                { q: "Loại trái cây đặc sản chín mọng mọc nhiều trên các nhà vườn Cồn Sơn là gì?", options: ["Bưởi da xanh, chôm chôm, nhãn", "Dâu tây", "Vải thiều", "Táo đỏ"], answer: 0 },
                { q: "Trải nghiệm 'Cá lóc bay' ở Cồn Sơn được người dân tập luyện bằng kỹ thuật gì?", options: ["Tập phản xạ khi cho ăn", "Dùng nhạc sôi động", "Dùng kích điện", "Dùng lưới tung cá"], answer: 0 },
                { q: "Ý nghĩa tên gọi 'Cồn Sơn' bắt nguồn từ loài cây nào mọc nhiều ngày xưa?", options: ["Cây Sơn trà", "Cây Sơn (nhựa làm sơn then)", "Cây Thái Sơn", "Cây Sơn tra"], answer: 1 }
            ],
            hard: [
                { q: "Diện tích tự nhiên của Cồn Sơn rộng khoảng bao nhiêu hecta?", options: ["Khoảng 70 ha", "Khoảng 1000 ha", "Khoảng 500 ha", "Khoảng 10 ha"], answer: 0 },
                { q: "Tuyến tham quan làng bè nuôi cá trên sông Hậu ở Cồn Sơn nuôi chủ yếu loài cá quý hiếm nào?", options: ["Cá thác lác cườm, cá hô, cá tra nghệ", "Cá hồi", "Cá tầm", "Cá ngừ"], answer: 0 },
                { q: "Món bánh dân gian độc đáo thơm phức từ lá tự nhiên ở Cồn Sơn là gì?", options: ["Bánh ít lá gai", "Bánh pía", "Bánh cốm", "Bánh lá mơ, bánh kẹp giòn"], answer: 3 },
                { q: "Khái niệm 'Mỗi nhà một sản phẩm du lịch' ở Cồn Sơn thể hiện giá trị gì?", options: ["Độc quyền kinh doanh", "Thu phí riêng", "Cạnh tranh giá rẻ", "Liên kết chia sẻ lợi ích cộng đồng"], answer: 3 },
                { q: "Đất đai Cồn Sơn vô cùng màu mỡ hàng năm nhờ bồi đắp lượng lớn chất gì?", options: ["Cát thạch anh", "Phù sa sông Hậu", "Đất sét trắng", "Mùn cưa"], answer: 1 }
            ]
        }
    },
    {
        id: 4,
        name: "Cầu Cần Thơ",
        images: [
            "https://tse1.mm.bing.net/th/id/OIP.OYh42tTKHKqa9Ec8gNRA3wHaEK?r=0&pid=Api&h=220&P=0",
            "https://tse2.mm.bing.net/th/id/OIP.qBAqyK4pTY2fH5izUN498AHaEL?r=0&pid=Api&h=220&P=0"
        ],
        questions: {
            easy: [
                { q: "Cầu Cần Thơ bắc qua dòng sông nào nối liền Cần Thơ và Vĩnh Long?", options: ["Sông Tiền", "Sông Đồng Nai", "Sông Sài Gòn", "Sông Hậu"], answer: 3 },
                { q: "Cầu Cần Thơ thuộc loại cầu nào về mặt kiến trúc kết cấu?", options: ["Cầu dầm thép", "Cầu treo dây võng", "Cầu dây văng", "Cầu vòm"], answer: 2 },
                { q: "Khi hoàn thành vào năm 2010, Cầu Cần Thơ giữ kỷ lục là cầu dây văng nhịp chính dài nhất vùng nào?", options: ["Châu Âu", "Thế giới", "Đông Nam Á", "Châu Mỹ"], answer: 2 },
                { q: "Cầu Cần Thơ nối thành phố Cần Thơ với tỉnh nào?", options: ["Vĩnh Long", "Đồng Tháp", "Hậu Giang", "An Giang"], answer: 0 },
                { q: "Về đêm, hệ thống chiếu sáng cầu Cần Thơ rực rỡ bởi trang bị gì?", options: ["Đèn dầu", "Đèn LED đổi màu", "Đèn huỳnh quang", "Đèn cầy"], answer: 1 }
            ],
            medium: [
                { q: "Tổng chiều dài toàn tuyến của công trình Cầu Cần Thơ là bao nhiêu km?", options: ["5 km", "2 km", "15,85 km", "30 km"], answer: 2 },
                { q: "Chiều dài nhịp chính của Cầu Cần Thơ là bao nhiêu mét?", options: ["200 mét", "1000 mét", "550 mét", "300 mét"], answer: 2 },
                { q: "Cầu Cần Thơ chính thức khánh thành thông xe vào năm nào?", options: ["2005", "2000", "2015", "2010"], answer: 3 },
                { q: "Chiều cao hai trụ tháp chính hình chữ Y ngược của Cầu Cần Thơ là bao nhiêu mét?", options: ["171,07 mét", "80 mét", "50 mét", "300 mét"], answer: 0 },
                { q: "Công trình Cầu Cần Thơ sử dụng nguồn vốn ODA hỗ trợ từ quốc gia nào?", options: ["Mỹ", "Nhật Bản", "Pháp", "Đức"], answer: 1 }
            ],
            hard: [
                { q: "Khổ tĩnh không thông thuyền (chiều cao cho tàu qua) dưới cầu Cần Thơ là bao nhiêu mét?", options: ["60 mét", "20 mét", "15 mét", "39 mét"], answer: 3 },
                { q: "Cầu Cần Thơ đã thay thế hoàn toàn cho phương tiện vượt sông huyền thoại nào?", options: ["Cáp treo", "Đò ngang", "Phà Cần Thơ (Phà Bắc)", "Cầu phao"], answer: 2 },
                { q: "Đơn vị nhà thầu chính thi công gói thầu nhịp chính cầu Cần Thơ là liên danh tập đoàn nào?", options: ["Bechtel", "Vinaconex", "Taisei - Kajima - Nippon Steel", "Hyundai"], answer: 2 },
                { q: "Tải trọng thiết kế của Cầu Cần Thơ đạt tiêu chuẩn quốc tế nào?", options: ["10 tấn", "HL93", "20 tấn", "HL50"], answer: 1 },
                { q: "Phía bờ tỉnh Vĩnh Long của Cầu Cần Thơ đặt tại phường nào?", options: ["Long Hồ", "Bình Minh", "Cái Vồn", "Sa Đéc"], answer: 1 }
            ]
        }
    },
    {
        id: 5,
        name: "Thiền Viện Trúc Lâm Phương Nam",
        images: [
            "https://tse4.mm.bing.net/th/id/OIP.uAuxXNqoE3i_w7chORSA9wHaD-?r=0&pid=Api&h=220&P=0",
            "https://tse3.mm.bing.net/th/id/OIP.9-O421xd8o_L6P68bc1bowHaE8?r=0&pid=Api&h=220&P=0"
        ],
        questions: {
            easy: [
                { q: "Thiền Viện Trúc Lâm Phương Nam thuộc dòng phái thiền nào?", options: ["Lâm Tế", "Tịnh Độ", "Tào Động", "Trúc Lâm Yên Tử"], answer: 3 },
                { q: "Thiền Viện Trúc Lâm Phương Nam nằm ở phường nào của Cần Thơ?", options: ["Thốt Nốt", "Cờ Đỏ", "Vĩnh Thạnh", "Phong Điền"], answer: 3 },
                { q: "Kiến trúc chính của Thiền Viện mang đậm nét văn hóa thời đại lịch sử nào?", options: ["Thời Nguyễn", "Thời Pháp", "Hiện đại", "Thời Lý - Trần"], answer: 3 },
                { q: "Chất liệu gỗ chủ đạo xây dựng Chánh điện Thiền viện là loại gỗ quý nào?", options: ["Gỗ Lim / Đinh Hương", "Tre nứa", "Gỗ ép", "Nhựa"], answer: 0 },
                { q: "Tượng Phật Thích Ca Mâu Ni trong Chánh điện được đúc bằng chất liệu gì?", options: ["Đất nung", "Đồng mạ vàng", "Xi măng", "Đá cẩm thạch"], answer: 1 }
            ],
            medium: [
                { q: "Thiền Viện Trúc Lâm Phương Nam được đánh giá là ngôi thiền viện như thế nào ở Miền Tây?", options: ["Mới nhất", "Lớn nhất miền Tây", "Cổ nhất", "Nhỏ nhất"], answer: 1 },
                { q: "Tổng diện tích quy hoạch xây dựng của Thiền Viện khoảng bao nhiêu ha?", options: ["Gần 4 ha", "0.5 ha", "50 ha", "100 ha"], answer: 0 },
                { q: "Kiến trúc tháp chuông và lầu trống trong Thiền Viện mô phỏng theo chùa nổi tiếng nào?", options: ["Chùa Keo (Thái Bình)", "Chùa Hương", "Chùa Một Cột", "Chùa Bái Đính"], answer: 0 },
                { q: "Tượng Bồ Tát Quan Âm Nam Hải trong khuôn viên Thiền viện được đặt ở đâu?", options: ["Trong chánh điện", "Ngoài cổng", "Giữa hồ sen", "Trên đỉnh núi"], answer: 2 },
                { q: "Thiền viện Trúc Lâm Phương Nam chính thức khánh thành vào năm nào?", options: ["2020", "1995", "2014", "2000"], answer: 2 }
            ],
            hard: [
                { q: "Trọng lượng của tượng Phật Thích Ca Mâu Ni bằng đồng trong Chánh điện nặng khoảng bao nhiêu?", options: ["100 tấn", "50 tấn", "Khoảng 3,5 tấn", "500 kg"], answer: 2 },
                { q: "Tượng Bồ Tát Thích Quảng Đức được tôn trí trang nghiêm tại đâu trong Thiền viện?", options: ["Cổng tam quan", "Dãy hành lang thờ tự", "Tháp chuông", "Đỉnh tháp"], answer: 1 },
                { q: "Đường kính của các cột gỗ lim trong Chánh điện Thiền Viện xấp xỉ bao nhiêu cm?", options: ["10 cm", "15 cm", "200 cm", "Khoảng 45 - 50 cm"], answer: 3 },
                { q: "Ngôi miếu thờ Bác Hồ và các anh hùng liệt sĩ trong thiền viện mang tên gọi là gì?", options: ["Bảo tháp", "Điện thờ", "Đền thờ Tấm lòng Việt", "Nhà tưởng niệm"], answer: 2 },
                { q: "Toàn bộ phần mái chánh điện được lợp bằng loại ngói cổ truyền nào?", options: ["Tôn lạnh", "Ngói vảy cá", "Mái bằng", "Ngói tây"], answer: 1 }
            ]
        }
    },
    {
        id: 6,
        name: "Vườn Cò Bằng Lăng",
        images: [
            "https://tse4.mm.bing.net/th/id/OIP.pdz_Gg4E9LAeXzDj2eb4WQHaEK?r=0&pid=Api&h=220&P=0",
            "https://tse3.mm.bing.net/th/id/OIP._0FxQVD9bdTwtP5ZR6HSjwHaFL?r=0&pid=Api&h=220&P=0"
        ],
        questions: {
            easy: [
                { q: "Vườn Cò Bằng Lăng là nơi sinh sống và trú ngụ của loài động vật nào?", options: ["Voi", "Chim cò các loại", "Khỉ", "Cá sấu"], answer: 1 },
                { q: "Vườn Cò Bằng Lăng nằm thuộc phường nào của Cần Thơ?", options: ["Cái Răng", "Phong Điền", "Ninh Kiều", "Thốt Nốt"], answer: 3 },
                { q: "Khung cảnh đẹp nhất tại Vườn Cò Bằng Lăng diễn ra vào thời điểm nào?", options: ["10h sáng", "Giữa trưa", "Hoàng hôn (chiều tà khi cò về) & Bình minh", "Nửa đêm"], answer: 2 },
                { q: "Tên gọi 'Bằng Lăng' của vườn cò xuất phát từ loài hoa/cây nào?", options: ["Cây Bằng Lăng", "Cây Mai", "Cây Đào", "Cây Phượng"], answer: 0 },
                { q: "Để ngắm nhìn toàn cảnh đàn cò từ trên cao, du khách đứng trên công trình nào?", options: ["Đài quan sát (Đài xem cò)", "Máy bay", "Khinh khí cầu", "Cáp treo"], answer: 0 }
            ],
            medium: [
                { q: "Vườn Cò Bằng Lăng do ai tự tay gầy dựng và bảo tồn từ năm 1983?", options: ["Ông Tám Hải", "Ông Nguyễn Ngọc Khánh (Bảy Sậy)", "Ông Ba Đòn", "Cụ Dương Chấn Kỷ"], answer: 1 },
                { q: "Diện tích Vườn Cò Bằng Lăng rộng khoảng bao nhiêu ha?", options: ["50 ha", "0,1 ha", "100 ha", "Khoảng 1,5 ha"], answer: 3 },
                { q: "Ước tính số lượng cá thể cò và chim sinh sống tại Vườn Cò Bằng Lăng khoảng bao nhiêu?", options: ["500 con", "1 triệu con", "1.000 con", "Hơn 100.000 con"], answer: 3 },
                { q: "Loài cò chiếm số lượng đông đảo nhất tại đây là loài nào?", options: ["Chim công", "Đại bàng", "Cò trắng, cò ruồi, cò quắm", "Đà điểu"], answer: 2 },
                { q: "Mùa sinh sản chính của các loài cò tại Bằng Lăng bắt đầu khoảng thời gian nào?", options: ["Tháng 4", "Tháng 1 đến tháng 3", "Tháng 6", "Tháng 8 đến tháng 1 âm lịch"], answer: 3 }
            ],
            hard: [
                { q: "Đài quan sát tại Vườn Cò Bằng Lăng cao khoảng bao nhiêu mét?", options: ["Khoảng 50 mét", "Khoảng 2 mét", "Khoảng 8 mét", "Khoảng 20 mét"], answer: 2 },
                { q: "Lối vào Vườn Cò Bằng Lăng thơ mộng rợp bóng mát của loài cây gì?", options: ["Cây dừa", "Hàng tre xanh & Bằng Lăng", "Cây thông", "Cây cao su"], answer: 1 },
                { q: "Ông Bảy Sậy khởi đầu vườn cò từ việc bảo vệ đàn cò tự nhiên đậu từ năm nào?", options: ["2005", "1983", "1999", "1960"], answer: 1 },
                { q: "Nguồn thức ăn chính ngoài thiên nhiên giúp đàn cò sinh sống là gì?", options: ["Trái cây", "Tôm, cá, tép, ếch nhái đồng ruộng", "Hạt ngô", "Cỏ khô"], answer: 1 },
                { q: "Khoảng cách từ trung tâm TP Cần Thơ đến Vườn Cò Bằng Lăng khoảng bao nhiêu km?", options: ["5 km", "120 km", "10 km", "Khoảng 60 km"], answer: 3 }
            ]
        }
    },
    {
        id: 7,
        name: "Làng Du Lịch Mỹ Khánh",
        images: [
            "https://tse1.mm.bing.net/th/id/OIP.jLzxWhkia3t-HMogel0YQgHaFF?r=0&pid=Api&h=220&P=0",
            "https://tse4.mm.bing.net/th/id/OIP.48kyt9offnauNWKkyRQU-AHaFj?r=0&pid=Api&h=220&P=0"
        ],
        questions: {
            easy: [
                { q: "Làng Du Lịch Mỹ Khánh là điểm du lịch sinh thái thuộc phường nào?", options: ["Vĩnh Thạnh", "Phong Điền", "Ô Môn", "Thốt Nốt"], answer: 1 },
                { q: "Trò chơi dân gian vui nhộn nổi tiếng thu hút du khách tại Mỹ Khánh là đua loài vật nào?", options: ["Đua rùa", "Đua bò", "Đua heo (lợn) & Đua chó", "Đua ngựa"], answer: 2 },
                { q: "Du khách đến Mỹ Khánh thưởng thức trái cây chín mọng trong không gian nào?", options: ["Trung tâm thương mại", "Vườn cây ăn trái sinh thái", "Nhà hàng băng chuyền", "Siêu thị"], answer: 1 },
                { q: "Trải nghiệm cảm giác mạnh cho động vật ăn tại Làng Mỹ Khánh là trò chơi gì?", options: ["Câu cá voi", "Cho sư tử ăn", "Cho gấu ăn", "Câu cá sấu"], answer: 3 },
                { q: "Trong Làng Mỹ Khánh có công trình tái hiện nhà của tầng lớp nào thời xưa?", options: ["Nhà cao tầng", "Nhà sàn Tây Nguyên", "Nhà Nhà Giàu / Nhà Đồn Điền", "Lâu đài Anh"], answer: 2 }
            ],
            medium: [
                { q: "Diện tích mở rộng của Làng Du Lịch Mỹ Khánh rộng tới hơn bao nhiêu?", options: ["2 hecta", "1 hecta", "Hơn 30 hecta", "500 hecta"], answer: 2 },
                { q: "Món ăn ẩm thực độc đáo thử thách lòng dũng cảm tại Mỹ Khánh là gì?", options: ["Chuột quay lu, hủ tiếu pizza", "Lẩu Thái", "Mì cay 7 cấp", "Súp tổ yến"], answer: 0 },
                { q: "Mỹ Khánh nằm trên tuyến đường du lịch kết nối gần kề với địa danh nào?", options: ["Chợ Nổi Cầm Điền", "Thiền Viện Trúc Lâm Phương Nam", "Bến Ninh Kiều", "Vườn Cò"], answer: 1 },
                { q: "Trải nghiệm 'Tát mương bắt cá' tại Mỹ Khánh du khách mặc trang phục truyền thống nào?", options: ["Áo dài Dân tộc", "Kimono", "Áo vest", "Áo bà ba & Khăn rằn"], answer: 3 },
                { q: "Làng du lịch Mỹ Khánh chính thức thành lập và đi vào hoạt động từ năm nào?", options: ["1980", "2010", "2018", "1996"], answer: 3 }
            ],
            hard: [
                { q: "Ngôi Nhà Cổ Nam Bộ được di dời bảo tồn trong Làng Mỹ Khánh có tuổi đời xấp xỉ bao nhiêu?", options: ["10 năm", "500 năm", "Hơn 100 năm", "20 năm"], answer: 2 },
                { q: "Dịch vụ tát mương bắt cá ở Mỹ Khánh mang lại trải nghiệm loại cá miền Tây nào phổ biến?", options: ["Cá ngừ", "Cá lóc, cá trê", "Cá hồi", "Cá chép đỏ"], answer: 1 },
                { q: "Làng nghề truyền thống được tái hiện bên trong Mỹ Khánh giúp du khách xem làm món gì?", options: ["Làm gốm", "Rèn dao", "Làm bánh tráng & Cất rượu", "Dệt lụa"], answer: 2 },
                { q: "Phương tiện di chuyển nội khu độc đáo mang nét hoài cổ đưa du khách tham quan Mỹ Khánh là gì?", options: ["Xe xích lô", "Tàu ngầm", "Cáp treo", "Xe điện & Xe ngựa"], answer: 3 },
                { q: "Resort Mỹ Khánh đạt tiêu chuẩn dịch vụ nghỉ dưỡng mấy sao?", options: ["Hostel", "Chưa xếp hạng", "3 sao", "7 sao"], answer: 2 }
            ]
        }
    }
];

/* GAME STATE */
let gameState = {
    gold: 200,
    diamonds: 5,
    hearts: 5,
    combo: 0,
    unlockedIslands: 1, // Start with Island 0 unlocked
    selectedIslandId: 0,
    selectedDifficulty: 'easy',
    currentQuestionIdx: 0,
    currentQuestions: [],
    secretMapBoost: false,
    inventory: {
        secretMap: 1,
        magnifyingGlass: 1,
        compass: 1,
        lightning: 0,
        healthPotion: 0
    },
    repairTimer: null,
    repairSeconds: 30
};

/* INITIALIZATION */
window.onload = function() {
    renderMap();
    updateUI();
};

/* RENDER MAP */
function renderMap() {
    const grid = document.getElementById('islandsGrid');
    grid.innerHTML = '';

    LANDMARKS.forEach((island, idx) => {
        const isUnlocked = idx < gameState.unlockedIslands;
        const card = document.createElement('div');
        card.className = `island-card ${isUnlocked ? 'unlocked' : 'locked'}`;

        card.innerHTML = `
            <img class="island-img" src="${island.images[0]}" alt="${island.name}">
            <div class="island-name">${idx + 1}. ${island.name}</div>
            <div class="island-status">${isUnlocked ? '🟢 Đã Mở Khóa' : '🔒 Đang Khóa'}</div>
            ${isUnlocked ? `
                <div class="island-btns">
                    <button class="btn-card btn-sight" onclick="openGallery(${idx})">📷 Ngắm Cảnh</button>
                    <button class="btn-card btn-play" onclick="openDiffModal(${idx})">⚔️ Thử Thách</button>
                </div>
            ` : `<p style="font-size:0.8rem; color:#888; margin-top:8px;">Hoàn thành đảo ${idx} để mở</p>`}
        `;
        grid.appendChild(card);
    });
}

/* UPDATE TOP UI STATS */
function updateUI() {
    document.getElementById('goldDisplay').innerText = gameState.gold;
    document.getElementById('diamondDisplay').innerText = gameState.diamonds;
    document.getElementById('comboDisplay').innerText = gameState.combo;

    // Render Hearts
    let heartsStr = '';
    for(let i=0; i<5; i++) {
        heartsStr += i < gameState.hearts ? '❤️' : '🖤';
    }
    document.getElementById('heartsDisplay').innerText = heartsStr;
}

/* GALLERY MODAL */
function openGallery(islandId) {
    const island = LANDMARKS[islandId];
    document.getElementById('galleryTitle').innerText = "Hình Ảnh: " + island.name;
    const grid = document.getElementById('galleryGrid');
    grid.innerHTML = '';

    island.images.forEach(url => {
        const img = document.createElement('img');
        img.className = 'gallery-img';
        img.src = url;
        grid.appendChild(img);
    });

    document.getElementById('galleryModal').style.display = 'flex';
}

/* DIFFICULTY SELECTION MODAL */
function openDiffModal(islandId) {
    if (gameState.hearts <= 0) {
        showRepairModal();
        return;
    }
    gameState.selectedIslandId = islandId;
    const island = LANDMARKS[islandId];
    document.getElementById('diffModalTitle').innerText = "Thử Thách: " + island.name;
    document.getElementById('difficultyModal').style.display = 'flex';
}

function selectDifficulty(diff) {
    gameState.selectedDifficulty = diff;
    closeModal('difficultyModal');
    startIslandJourney();
}

/* START ISLAND JOURNEY */
function startIslandJourney() {
    // Sailing Animation
    const overlay = document.getElementById('sailingOverlay');
    const island = LANDMARKS[gameState.selectedIslandId];
    document.getElementById('sailingText').innerText = `Đang giương buồm đến ${island.name}...`;
    overlay.style.display = 'flex';

    setTimeout(() => {
        overlay.style.display = 'none';
        // Setup Quiz
        gameState.currentQuestionIdx = 0;
        gameState.currentQuestions = island.questions[gameState.selectedDifficulty];
        
        document.getElementById('mapView').style.display = 'none';
        document.getElementById('quizView').style.display = 'block';
        document.getElementById('quizIslandTitle').innerText = island.name;
        
        let diffText = gameState.selectedDifficulty === 'easy' ? 'Dễ (+50 🪙)' : 
                       (gameState.selectedDifficulty === 'medium' ? 'Trung Bình (+80 🪙)' : 'Khó (+120 🪙)');
        document.getElementById('diffBadge').innerText = 'Cấp Độ: ' + diffText;

        renderQuestion();
    }, 1200);
}

/* RENDER QUESTION */
function renderQuestion() {
    const qData = gameState.currentQuestions[gameState.currentQuestionIdx];
    document.getElementById('questionProgressText').innerText = `Câu ${gameState.currentQuestionIdx + 1}/5`;
    
    // Fill Progress Bar
    let pct = ((gameState.currentQuestionIdx) / 5) * 100;
    document.getElementById('progressBarFill').style.width = pct + '%';

    // Boost map indicator
    document.getElementById('mapBoostText').style.display = gameState.secretMapBoost ? 'inline' : 'none';

    document.getElementById('questionText').innerText = qData.q;

    const grid = document.getElementById('optionsGrid');
    grid.innerHTML = '';

    qData.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.id = `optBtn_${i}`;
        btn.innerHTML = `<span>${['A','B','C','D'][i]}.</span> <span>${opt}</span>`;
        btn.onclick = () => handleAnswer(i);
        grid.appendChild(btn);
    });
}

/* HANDLE ANSWER */
function handleAnswer(selectedIdx) {
    const qData = gameState.currentQuestions[gameState.currentQuestionIdx];
    const btns = document.querySelectorAll('.option-btn');
    btns.forEach(b => b.onclick = null); // Disable click

    if (selectedIdx === qData.answer) {
        // CORRECT
        document.getElementById(`optBtn_${selectedIdx}`).classList.add('correct');
        gameState.combo++;
        
        // Gold Reward
        let rewardGold = gameState.selectedDifficulty === 'easy' ? 50 : (gameState.selectedDifficulty === 'medium' ? 80 : 120);
        gameState.gold += rewardGold;

        // Combo Bonus check (multiples of 10)
        if (gameState.combo > 0 && gameState.combo % 10 === 0) {
            gameState.gold += 500;
            showToast(`🔥 SIÊU COMBO ${gameState.combo}! Thưởng +500 Vàng!`);
        } else {
            showToast(`✅ Chính xác! +${rewardGold} Vàng`);
        }

        // Treasure Chest Roll
        rollTreasureChest();

        updateUI();

        setTimeout(() => {
            gameState.currentQuestionIdx++;
            if (gameState.currentQuestionIdx >= 5) {
                // Complete Island!
                completeIsland();
            } else {
                renderQuestion();
            }
        }, 1200);

    } else {
        // WRONG
        document.getElementById(`optBtn_${selectedIdx}`).classList.add('wrong');
        document.getElementById(`optBtn_${qData.answer}`).classList.add('correct');
        
        gameState.combo = 0; // Reset streak
        gameState.hearts--;
        updateUI();

        if (gameState.hearts <= 0) {
            setTimeout(() => {
                showRepairModal();
            }, 1200);
        } else {
            showToast(`❌ Trả lời sai! Trừ 1 Tim ❤️`);
            setTimeout(() => {
                gameState.currentQuestionIdx++;
                if (gameState.currentQuestionIdx >= 5) {
                    completeIsland();
                } else {
                    renderQuestion();
                }
            }, 1400);
        }
    }
}

/* TREASURE CHEST RANDOM DROP */
function rollTreasureChest() {
    let baseChance = gameState.selectedDifficulty === 'easy' ? 0.10 : (gameState.selectedDifficulty === 'medium' ? 0.15 : 0.20);
    if (gameState.secretMapBoost) {
        baseChance += 0.10; // Boost
    }

    if (Math.random() < baseChance) {
        let dropDiamonds = Math.floor(Math.random() * 3) + 2; // 2 - 4 Diamonds
        gameState.diamonds += dropDiamonds;
        setTimeout(() => {
            showToast(`👑 BẠN PHÁT HIỆN KHO BÁU! Nhận +${dropDiamonds} Kim Cương 💎`);
        }, 400);
    }
}

/* COMPLETE ISLAND */
function completeIsland() {
    // Unlock next island if completing current progress
    if (gameState.selectedIslandId + 1 >= gameState.unlockedIslands) {
        gameState.unlockedIslands = Math.min(8, gameState.selectedIslandId + 2);
    }

    // Special Rewards 5/5
    gameState.gold += 300;
    gameState.diamonds += 5;
    updateUI();
    renderMap();

    const island = LANDMARKS[gameState.selectedIslandId];
    document.getElementById('victoryDesc').innerText = `Bạn đã hoàn thành xuất sắc 5/5 câu hỏi tại ${island.name}!`;
    document.getElementById('victoryModal').style.display = 'flex';
}

/* BACK TO MAP */
function backToMap() {
    document.getElementById('quizView').style.display = 'none';
    document.getElementById('mapView').style.display = 'block';
}

/* REPAIR SHIP SYSTEM */
function showRepairModal() {
    document.getElementById('repairModal').style.display = 'flex';
    startRepairTimer();
}

function startRepairTimer() {
    clearInterval(gameState.repairTimer);
    gameState.repairSeconds = 30;
    document.getElementById('repairTimerText').innerText = "00:30";

    gameState.repairTimer = setInterval(() => {
        gameState.repairSeconds--;
        let secStr = gameState.repairSeconds < 10 ? '0' + gameState.repairSeconds : gameState.repairSeconds;
        document.getElementById('repairTimerText').innerText = `00:${secStr}`;

        if (gameState.repairSeconds <= 0) {
            clearInterval(gameState.repairTimer);
            gameState.hearts = 5;
            updateUI();
            closeModal('repairModal');
            showToast("🛠️ Tàu đã được sửa xong! Khôi phục 5 Tim.");
        }
    }, 1000);
}

function repairShipInstant() {
    if (gameState.gold >= 200) {
        gameState.gold -= 200;
        gameState.hearts = 5;
        clearInterval(gameState.repairTimer);
        updateUI();
        closeModal('repairModal');
        showToast("🔧 Đã bỏ 200 Vàng sửa tàu thành công!");
    } else {
        showToast("⚠️ Bạn không có đủ 200 Vàng!");
    }
}

/* SHOP & ITEMS SYSTEM */
function openShopModal() {
    document.getElementById('shopModal').style.display = 'flex';
}

function buyItem(itemKey, cost) {
    if (gameState.diamonds >= cost) {
        gameState.diamonds -= cost;
        gameState.inventory[itemKey] = (gameState.inventory[itemKey] || 0) + 1;
        updateUI();
        showToast("🛒 Mua vật phẩm thành công!");
    } else {
        showToast("⚠️ Không đủ Kim Cương!");
    }
}

function openInventoryModal() {
    const list = document.getElementById('inventoryList');
    list.innerHTML = '';

    const itemsConfig = [
        { id: 'secretMap', name: '🗺️ Bản Đồ Bí Mật', desc: 'Tăng +10% tỉ lệ gặp Kho Báu Kim Cương' },
        { id: 'magnifyingGlass', name: '🔍 Kính Lúp Hải Tặc', desc: 'Loại bỏ 2 phương án sai' },
        { id: 'compass', name: '🧭 La Bàn Thần Kỳ', desc: 'Chỉ ra đáp án chính xác' },
        { id: 'lightning', name: '⚡ Sấm Sét Poseidon', desc: 'Bỏ qua & trả lời đúng ngay' },
        { id: 'healthPotion', name: '💖 Bình Máu Hải Tặc', desc: 'Hồi phục lại 5 Tim đầy' }
    ];

    itemsConfig.forEach(item => {
        const count = gameState.inventory[item.id] || 0;
        const div = document.createElement('div');
        div.className = 'shop-item';
        div.innerHTML = `
            <div class="shop-item-info">
                <div class="shop-item-name">${item.name} (Sở hữu: ${count})</div>
                <div class="shop-item-desc">${item.desc}</div>
            </div>
            <button class="btn-buy" style="background:${count > 0 ? '#8e44ad' : '#7f8c8d'}" 
                    onclick="useItem('${item.id}')" ${count <= 0 ? 'disabled' : ''}>Kích Hoạt</button>
        `;
        list.appendChild(div);
    });

    document.getElementById('inventoryModal').style.display = 'flex';
}

function useItem(itemKey) {
    if (!gameState.inventory[itemKey] || gameState.inventory[itemKey] <= 0) return;

    const qData = gameState.currentQuestions[gameState.currentQuestionIdx];

    if (itemKey === 'secretMap') {
        gameState.secretMapBoost = true;
        gameState.inventory.secretMap--;
        showToast("🗺️ Đã kích hoạt Bản Đồ Bí Mật!");
        document.getElementById('mapBoostText').style.display = 'inline';

    } else if (itemKey === 'magnifyingGlass') {
        gameState.inventory.magnifyingGlass--;
        // Hide 2 wrong options
        let wrongIndices = [0, 1, 2, 3].filter(i => i !== qData.answer);
        wrongIndices.sort(() => Math.random() - 0.5);
        document.getElementById(`optBtn_${wrongIndices[0]}`).classList.add('disabled');
        document.getElementById(`optBtn_${wrongIndices[1]}`).classList.add('disabled');
        showToast("🔍 Kính lúp đã loại bỏ 2 phương án sai!");

    } else if (itemKey === 'compass') {
        gameState.inventory.compass--;
        document.getElementById(`optBtn_${qData.answer}`).style.borderColor = "#f1c40f";
        document.getElementById(`optBtn_${qData.answer}`).style.boxShadow = "0 0 15px #f1c40f";
        showToast("🧭 La Bàn đã chỉ ra đáp án đúng!");

    } else if (itemKey === 'lightning') {
        gameState.inventory.lightning--;
        closeModal('inventoryModal');
        handleAnswer(qData.answer);
        return;

    } else if (itemKey === 'healthPotion') {
        gameState.inventory.healthPotion--;
        gameState.hearts = 5;
        updateUI();
        showToast("💖 Đã hồi phục đầy 5 Tim!");
    }

    closeModal('inventoryModal');
}

/* CLOSE MODALS & UTILS */
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function showToast(msg) {
    const toast = document.getElementById('toastNotif');
    toast.innerText = msg;
    toast.style.display = 'block';
    setTimeout(() => {
        toast.style.display = 'none';
    }, 2500);
}