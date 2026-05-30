import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import VideoPlayer from "./App";

describe("VideoPlayer", () => {
  it("should toggle play/pause when button is clicked", () => {
    const { container } = render(<VideoPlayer />);

    const button = screen.getByText("Play");
    const video = container.querySelector("video") as HTMLVideoElement;

    const playSpy = vi.spyOn(video, "play").mockImplementation(() => Promise.resolve());
    const pauseSpy = vi.spyOn(video, "pause").mockImplementation(() => {});

    fireEvent.click(button);

    expect(playSpy).toHaveBeenCalled();
    expect(screen.getByText("Pause")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Pause"));

    expect(pauseSpy).toHaveBeenCalled();
    expect(screen.getByText("Play")).toBeInTheDocument();

    playSpy.mockRestore();
    pauseSpy.mockRestore();
  });

  it("should sync button state with video play/pause events", () => {
    const { container } = render(<VideoPlayer />);

    const video = container.querySelector("video") as HTMLVideoElement;

    fireEvent.play(video);

    expect(screen.getByText("Pause")).toBeInTheDocument();

    fireEvent.pause(video);

    expect(screen.getByText("Play")).toBeInTheDocument();
  });
});
