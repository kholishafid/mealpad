import BookmarkIcon from "../../assets/icon/bookmark.svg"
import BookmarkFilledIcon from "../../assets/icon/bookmark_fill.svg"
import useLocalFav from "../../hooks/useLocalFav";

const Bookmark = ({ id }: { id: string }) => {
  const { data: favoriteData, addToFavorite, removeFromFavorite } = useLocalFav()


  if (favoriteData?.includes(id ?? 'no')) {
    return (
      <div className="flex gap-2 py-2 cursor-pointer items-center" onClick={() => removeFromFavorite(id ?? '')}>
        <img src={BookmarkFilledIcon} alt="" />
        <span className="text-sm">Bookmarked</span>
      </div>
    )
  }
  return (
    <div className="flex gap-2 py-2 cursor-pointer items-center" onClick={() => addToFavorite(id ?? '')}>
      <img src={BookmarkIcon} alt="" onClick={() => addToFavorite(id ?? '')} />
      <span className="text-sm">Add bookmark</span>
    </div>
  );
}

export default Bookmark;