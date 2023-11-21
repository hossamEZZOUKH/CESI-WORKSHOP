import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './App.css';

const App: React.FC = () => {
	const [images, setImages] = useState<string[]>([]);
	const [selectedImg, setSelectedImg] = useState<string | null>(null);

	const API_URL =
		import.meta.env.VITE_REACT_APP_API_URL || 'http://localhost:3001';

	useEffect(() => {
		fetch(`${API_URL}/images`)
			.then((response) => {
				if (!response.ok) {
					throw new Error(
						'Network response was not ok ' + response.statusText
					);
				}
				return response.json();
			})
			.then((data) => {
				if (!Array.isArray(data)) {
					throw new TypeError('Data is not an array');
				}
				setImages(data);
			})
			.catch((error) => {
				console.error(
					'There has been a problem with your fetch operation:',
					error
				);
			});
	}, []);

	const handleClick = (image: string) => {
		setSelectedImg(image);
	};

	const changeImage = (newIndex: number) => {
		setSelectedImg(images[newIndex]);
	};

	const handlePrev = () => {
		const currentIndex = images.indexOf(selectedImg!);
		const prevIndex = (currentIndex - 1 + images.length) % images.length;
		changeImage(prevIndex);
	};

	const handleNext = () => {
		const currentIndex = images.indexOf(selectedImg!);
		const nextIndex = (currentIndex + 1) % images.length;
		changeImage(nextIndex);
	};

	const handleNavClick = (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
		direction: 'prev' | 'next'
	) => {
		event.stopPropagation();
		if (direction === 'prev') {
			handlePrev();
		} else {
			handleNext();
		}
	};

	const imageVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1 },
	};

	return (
		<>
			<div className="grid-container">
				{images.map((image) => (
					<div className="grid-item" key={image}>
						<img
							src={`${API_URL}/assets/${image}`}
							alt={image}
							onClick={() => handleClick(image)}
							style={{ cursor: 'pointer' }}
						/>
					</div>
				))}
			</div>

			<AnimatePresence>
				{selectedImg && (
					<motion.div
						className="backdrop"
						initial="hidden"
						animate="visible"
						exit="hidden"
						onClick={() => setSelectedImg(null)}
					>
						<motion.img
							src={`http://localhost:3001/assets/${selectedImg}`}
							alt="Enlarged pic"
							variants={imageVariants}
							initial="hidden"
							animate="visible"
							exit="hidden"
							key={selectedImg}
							transition={{ duration: 0.5 }}
						/>
						<button
							className="carousel-btn prev"
							onClick={(e) => handleNavClick(e, 'prev')}
						>
							<FaChevronLeft size={30} />
						</button>
						<button
							className="carousel-btn next"
							onClick={(e) => handleNavClick(e, 'next')}
						>
							<FaChevronRight size={30} />
						</button>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default App;
