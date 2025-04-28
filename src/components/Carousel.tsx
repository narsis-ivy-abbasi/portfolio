"use client";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Box, IconButton, useMediaQuery, useTheme } from "@mui/material";
import { ReactNode, useEffect, useRef, useState } from "react";

interface CarouselProps {
  children: ReactNode[];
  gap?: number;
  cardWidth?: number;
}

const Carousel = ({ children, gap = 20 }: CarouselProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollIndex, setScrollIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isMd = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    if (isXs) {
      setVisibleCards(1);
    } else if (isMd) {
      setVisibleCards(2);
    } else {
      setVisibleCards(3);
    }
  }, [isXs, isMd]);

  const handleNext = () => {
    if (scrollIndex < children.length - visibleCards) {
      setScrollIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (scrollIndex > 0) {
      setScrollIndex((prev) => prev - 1);
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const cardWidth = container.offsetWidth / visibleCards;
      container.scrollTo({
        left: scrollIndex * (cardWidth + gap),
        behavior: "smooth",
      });
    }
  }, [scrollIndex, visibleCards, gap]);

  const maxScrollIndex = children.length - visibleCards;

  return (
    <Box
      display="flex"
      alignItems="center"
      sx={{ width: "100%", position: "relative" }}
    >
      <IconButton
        onClick={handlePrev}
        disabled={scrollIndex === 0}
        sx={{
          zIndex: 2,
          mr: 1,
          border:1,
          borderColor:"gray",
          boxShadow: 2,
          "&:disabled": { opacity: 0.3 },
        }}
      >
        <ChevronLeft />
      </IconButton>

      <Box
        ref={containerRef}
        sx={{
          overflow: "hidden",
          display: "flex",
          gap: `${gap}px`,
          scrollBehavior: "smooth",
          flex: 1,
        }}
      >
        {children.map((child, i) => (
          <Box
            key={i}
            sx={{
              flex: `0 0 calc((100% - ${
                (visibleCards - 1) * gap
              }px) / ${visibleCards})`,
              transition: "transform 0.3s",
            }}
          >
            {child}
          </Box>
        ))}
      </Box>

      <IconButton
        onClick={handleNext}
        disabled={scrollIndex >= maxScrollIndex}
        sx={{
          zIndex: 2,
          ml: 1,
          border:1,
          borderColor:"gray",
          boxShadow: 2,
          "&:disabled": { opacity: 0.3 },
        }}
      >
        <ChevronRight />
      </IconButton>
    </Box>
  );
};

export default Carousel;
