/*선택된지역*/
var selectedLocation = "용산";

// 선택된 지역을 텍스트로 표시
document.getElementById("selected-location-text").innerText = selectedLocation;
var courseCounter = 4; // 다음 추가될 코스 ID

document.getElementById("addCourseBtn").addEventListener("click", function() {
    // 새로운 코스를 담을 div 생성
    var newCourseDiv = document.createElement("div");
    newCourseDiv.classList.add("course"); // 새로운 div에 course 클래스 추가

    // 새로운 코스 선택 드롭다운 생성
    var newCourseLabel = document.createElement("label");
    var courseId = "course" + courseCounter;
    newCourseLabel.htmlFor = courseId;
    newCourseLabel.textContent = "코스 " + courseCounter + ": ";

    var newCourseDropdown = document.createElement("select");
    newCourseDropdown.name = courseId; // 각 코스에 고유한 ID 할당
    newCourseDropdown.id = courseId;
    newCourseDropdown.innerHTML = `
                    <option value="" disabled selected>코스 선택</option>
                    <option value="식사">식사</option>
                    <option value="카페">카페</option>
                    <option value="활동">활동</option>
                `;

    // 새로운 코스를 담을 div에 추가
    newCourseDiv.appendChild(newCourseLabel);
    newCourseDiv.appendChild(newCourseDropdown);

    // courseContainer에 새로운 코스를 추가
    document.getElementById("courseContainer").appendChild(newCourseDiv);
    // 새 코스와 이전 코스 사이에 줄 바꿈 추가
    var br = document.createElement("br");
    document.getElementById("courseContainer").appendChild(br);
    // 코스 카운터 증가
    courseCounter++;
});
// 토글 버튼 클릭 시 사이드바 및 콘텐츠 활성/비활성화
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('active');
});