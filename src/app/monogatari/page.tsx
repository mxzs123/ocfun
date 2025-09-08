"use client";

/**
 * Monogatari 示例页面（占位/演示用途）
 *
 * 用途：
 * - 验证 @monogatari/core 是否能在 Next.js 14 App Router 中按「仅客户端」方式加载。
 * - 作为后续真实集成的脚手架，方便替换/删除。
 *
 * 说明：
 * - 我们使用动态 import 在浏览器端加载库，避免 SSR 环境（无 window/document）导致的报错。
 * - 未调用具体 API（因不同版本导出可能差异较大），你可以在标注的位置按实际 API 接口接入。
 * - 页面含详细注释，便于后续删除或替换为正式实现。
 */

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function MonogatariDemoPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "loaded" | "initialized" | "error">(
    "idle",
  );
  const [message, setMessage] = useState<string>("准备加载 Monogatari 模块…");

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setStatus("loading");
        setMessage("正在通过动态 import 加载 @monogatari/core 模块…");

        // 仅在客户端执行：Next.js App Router 下，useEffect 只会在浏览器端运行
        const mod = (await import("@monogatari/core")) as unknown;
        if (cancelled) return;

        // 在控制台查看实际导出来判断如何初始化
        // eslint-disable-next-line no-console
        console.log("[@monogatari/core] module loaded:", mod);
        setStatus("loaded");
        setMessage("模块已加载，可根据导出进行初始化。");

        // 示例初始化思路（根据真实 API 选择一个分支使用）：
        // ─────────────────────────────────────────────────────────────────────
        // 1) 如果库提供默认导出且可直接构造/初始化：
        // const engine = mod.default?.(/* options */) || null;
        // if (engine && containerRef.current) {
        //   engine.mount?.(containerRef.current);
        //   setStatus("initialized");
        //   setMessage("已初始化并挂载到容器。");
        // }
        //
        // 2) 如果库提供显式的 create/init 方法：
        // const engine = mod.create?.({ /* options */ }) || mod.init?.({});
        // if (engine && containerRef.current) {
        //   engine.mount?.(containerRef.current);
        //   setStatus("initialized");
        //   setMessage("已初始化并挂载到容器。");
        // }
        //
        // 3) 如果库需要在一个已有的 DOM 容器内渲染：
        // if (containerRef.current && typeof mod.render === 'function') {
        //   mod.render(containerRef.current, {/* data */});
        //   setStatus("initialized");
        //   setMessage("已在容器中渲染。");
        // }
        // ─────────────────────────────────────────────────────────────────────
      } catch (err: unknown) {
        if (cancelled) return;
        // eslint-disable-next-line no-console
        console.error("[@monogatari/core] load error:", err);
        setStatus("error");
        const e = err as { message?: string } | undefined;
        setMessage(`加载失败：${e?.message || String(err)}`);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="min-h-screen p-8 flex flex-col gap-6">
      <div>
        <Link href="/" className="text-sm underline underline-offset-4 hover:opacity-80">
          ← 返回首页
        </Link>
      </div>

      <h1 className="text-2xl font-semibold">Monogatari 示例（占位）</h1>

      <p className="text-sm text-black/60 dark:text-white/60">
        这是一个演示页面：在客户端通过动态 import 加载
        <code className="mx-1 px-1 py-0.5 rounded bg-black/5 dark:bg-white/10">
          @monogatari/core
        </code>
        。根据你项目需要，请将下方容器中的占位逻辑替换为实际的初始化与渲染代码。页面准备就绪后即可删除本示例。
      </p>

      <div className="text-sm">
        <span className="font-mono">状态</span>：
        <span className="ml-1 rounded px-1 py-0.5 bg-black/5 dark:bg-white/10">{status}</span>
      </div>
      <div className="text-sm">提示：{message}</div>

      {/*
        用于挂载/渲染 Monogatari 的 DOM 容器。
        - 如果库提供 mount(container) 或 render(container, data) 等方法，可直接使用。
        - 若需要独立样式隔离，可考虑在此容器内添加 CSS 作用域或 Shadow DOM（视库而定）。
      */}
      <div
        ref={containerRef}
        className="mt-4 min-h-[240px] rounded border border-black/10 dark:border-white/10 p-4"
      >
        <p className="text-sm opacity-70">Monogatari 容器（示例）。将来会在这里渲染实际内容。</p>
      </div>

      <div className="mt-6 text-xs text-black/40 dark:text-white/40">
        注：示例使用动态导入与最小假定 API。接入具体 API
        后，请删除注释并替换为你项目的真实初始化流程。
      </div>
    </div>
  );
}
