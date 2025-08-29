const InstagramEmbed = () => {
  return (
    <section className="my-20 px-4 md:px-12">
      <div className="max-w-100 h-auto mx-auto rounded-3xl overflow-hidden shadow-xl border-4 border-yellow-500 bg-white">
        <video
          className="w-100 h-auto aspect-video object-cover"
          loop
          controls={true}
          playsInline
        >
          <source src="/images/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="text-center mt-6">
        <p className="text-lg md:text-xl text-gray-700 italic">
          Un vistazo al estilo <span className="font-semibold text-yellow-600">Abuelo Mario</span> en acción.
        </p>
      </div>
    </section>
  );
};

export default InstagramEmbed;