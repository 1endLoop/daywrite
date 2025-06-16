import React, { useState } from 'react';
import S from './style';

const TypingSetting = () => {
  const [fontSize, setFontSize] = useState(24);
  const [fontWeight, setFontWeight] = useState(600);

  const [images, setImages] = useState([
    '/assets/images/background/snow.jpg',
    '/assets/images/background/sea1.jpg',
  ]);

  const [selectedImage, setSelectedImage] = useState(0);
  const [confirmedImage, setConfirmedImage] = useState(null); // ✅ 최종 선택된 이미지

  // 이미지 삭제
  const handleDeleteImage = () => {
    if (selectedImage === null || selectedImage >= images.length) return;

    const newImages = images.filter((_, idx) => idx !== selectedImage);
    setImages(newImages);

    // 선택/확정 모두 초기화 또는 재설정
    if (newImages.length === 0) {
      setSelectedImage(null);
      setConfirmedImage(null);
    } else {
      const newSelected = Math.max(0, selectedImage - 1);
      setSelectedImage(newSelected);

      // 삭제된 이미지가 확정된 이미지였을 경우 초기화
      if (confirmedImage === selectedImage) {
        setConfirmedImage(null);
      } else if (confirmedImage > selectedImage) {
        setConfirmedImage((prev) => prev - 1);
      }
    }
  };

  // 이미지 업로드
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setImages((prev) => {
      const updated = [...prev, imageUrl];
      setSelectedImage(updated.length - 1);
      return updated;
    });
  };

  return (
    <S.TypingSettingContainer>
      <S.TypingSettingTitle>타이핑 화면 세팅</S.TypingSettingTitle>

      <S.PreviewText size={fontSize} weight={fontWeight}>
        안녕하세요. daywrite입니다.
      </S.PreviewText>

      <S.SliderRow>
        <S.Label>FONT SIZE</S.Label>
        <S.Slider>
          <S.ControlButton onClick={() => setFontSize((s) => Math.max(s - 1, 10))}>−</S.ControlButton>
          <span>{fontSize} pt</span>
          <S.ControlButton onClick={() => setFontSize((s) => s + 1)}>＋</S.ControlButton>
        </S.Slider>
      </S.SliderRow>

      <S.SliderRow>
        <S.Label>FONT WEIGHT</S.Label>
        <S.Slider>
          <S.ControlButton onClick={() => setFontWeight((w) => Math.max(w - 100, 100))}>−</S.ControlButton>
          <span>{fontWeight === 700 ? 'BOLD' : fontWeight}</span>
          <S.ControlButton onClick={() => setFontWeight((w) => Math.min(w + 100, 900))}>＋</S.ControlButton>
        </S.Slider>
      </S.SliderRow>

      <S.BackgroundSection>
        <S.BackgroundHeader>
          <S.Label>BACKGROUND IMAGE</S.Label>

          <S.BackgroundButtonGroup>
            <S.ActionButton
              type="button"
              onClick={() => document.getElementById('upload-image').click()}
            >
              추가하기
            </S.ActionButton>

            <S.VerticalDivider />

            <S.ActionButton
              onClick={handleDeleteImage}
              disabled={selectedImage === null}
            >
              삭제하기
            </S.ActionButton>

            <input
              id="upload-image"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: 'none' }}
            />
          </S.BackgroundButtonGroup>
        </S.BackgroundHeader>

        <S.ImageGrid>
          {images.map((src, i) => (
            <S.Thumbnail
              key={i}
              src={src}
              selected={i === selectedImage}
              confirmed={i === confirmedImage}
              onClick={() => {
                if (i === selectedImage) {
                  setConfirmedImage(i); // ✅ 두 번 클릭 → 최종 확정
                } else {
                  setSelectedImage(i); // ✅ 1회 클릭 → 선택
                }
              }}
            />
          ))}
        </S.ImageGrid>
      </S.BackgroundSection>
    </S.TypingSettingContainer>
  );
};

export default TypingSetting;



