

export const Video = ({ embedId }) =>
(
    <div className="videoResp">
        <iframe
            width="426"
            height="240"
            src={embedId}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
        />
    </div>
);


export default Video;