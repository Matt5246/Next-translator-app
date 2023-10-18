export default function Background() {
    return (
      <>
        <video autoPlay muted loop className="w-full h-full object-cover fixed top-0 left-0 z-0">
          <source src="background_merged_changed.mp4" type="video/mp4" />
        </video>
      </>
    );
}
