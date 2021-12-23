

export const Video = ({ embedId }) =>
(
    <div className="videoResp">
        <iframe className="vid"
            width="580"
            height="320"
            src={embedId}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
        />
    </div>
);


export default Video;