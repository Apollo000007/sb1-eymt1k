import { Creator } from '../types/creator';

// クリエイター情報のデータ
// 実際のクリエイター情報に置き換える際は、このファイルを編集してください
export const creators: Creator[] = [
  {
    id: 1,
    name: "MIKA",
    image: "https://images.unsplash.com/photo-1618721405821-80ebc4b63d26?auto=format&fit=crop&q=80",
    category: "ビューティー / ファッション",
    description: "トレンドを先取りするファッションとメイクで人気の実力派インフルエンサー。最新のトレンドを独自の視点で発信し、多くのフォロワーから支持されています。",
    followers: "150万",
    social: { 
      instagram: "#", // TODO: 実際のInstagramリンクに変更
      youtube: "#",   // TODO: 実際のYouTubeリンクに変更
      twitter: "#"    // TODO: 実際のTwitterリンクに変更
    }
  },
  {
    id: 2,
    name: "TAKERU",
    image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?auto=format&fit=crop&q=80",
    category: "ライフスタイル / トラベル",
    description: "世界中の魅力的なスポットを独自の視点で紹介するトラベルクリエイター。美しい映像と写真で視聴者を魅了し続けています。",
    followers: "80万",
    social: { 
      instagram: "#",
      youtube: "#"
    }
  },
  {
    id: 3,
    name: "YUKI",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80",
    category: "音楽 / アート",
    description: "独特な世界観で音楽とアートを融合させる新世代クリエイター。革新的な作品で若い世代から絶大な支持を得ています。",
    followers: "95万",
    social: { 
      instagram: "#",
      youtube: "#",
      twitter: "#"
    }
  },
  {
    id: 4,
    name: "KAORI",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80",
    category: "ダンス / パフォーマンス",
    description: "ストリートダンスの第一人者として活躍するダンスクリエイター。独創的なパフォーマンスで国内外から注目を集めています。",
    followers: "110万",
    social: { 
      instagram: "#",
      youtube: "#"
    }
  },
  {
    id: 5,
    name: "RYO",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80",
    category: "テクノロジー / ガジェット",
    description: "最新テクノロジーを分かりやすく解説する人気テッククリエイター。革新的なガジェットレビューで定評があります。",
    followers: "130万",
    social: { 
      youtube: "#",
      twitter: "#"
    }
  },
  {
    id: 6,
    name: "SAKURA",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80",
    category: "ビューティー / コスメ",
    description: "韓国コスメに特化したメイクテクニックを発信。トレンド感のある美容情報を日々更新しています。",
    followers: "88万",
    social: { 
      instagram: "#",
      youtube: "#"
    }
  }
];