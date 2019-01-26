#pragma once

#include <wrl.h>

namespace DX
{
	// 애니메이션 및 시뮬레이션 타이밍용 도우미 클래스입니다.
	class StepTimer
	{
	public:
		StepTimer() : 
			m_elapsedTicks(0),
			m_totalTicks(0),
			m_leftOverTicks(0),
			m_frameCount(0),
			m_framesPerSecond(0),
			m_framesThisSecond(0),
			m_qpcSecondCounter(0),
			m_isFixedTimeStep(false),
			m_targetElapsedTicks(TicksPerSecond / 60)
		{
			if (!QueryPerformanceFrequency(&m_qpcFrequency))
			{
				throw ref new Platform::FailureException();
			}

			if (!QueryPerformanceCounter(&m_qpcLastTime))
			{
				throw ref new Platform::FailureException();
			}

			// 최대 델타를 1초의 1/10로 초기화합니다.
			m_qpcMaxDelta = m_qpcFrequency.QuadPart / 10;
		}

		// 이전 Update 호출 이후 경과한 시간을 가져옵니다.
		uint64 GetElapsedTicks() const						{ return m_elapsedTicks; }
		double GetElapsedSeconds() const					{ return TicksToSeconds(m_elapsedTicks); }

		// 프로그램이 시작된 이후의 총 시간을 가져옵니다.
		uint64 GetTotalTicks() const						{ return m_totalTicks; }
		double GetTotalSeconds() const						{ return TicksToSeconds(m_totalTicks); }

		// 프로그램이 시작된 이후의 총 업데이트 수를 가져옵니다.
		uint32 GetFrameCount() const						{ return m_frameCount; }

		// 현재 framerate를 가져옵니다.
		uint32 GetFramesPerSecond() const					{ return m_framesPerSecond; }

		// 고정 timestep 모드를 사용할지 가변 timestep 모드를 사용할지 설정합니다.
		void SetFixedTimeStep(bool isFixedTimestep)			{ m_isFixedTimeStep = isFixedTimestep; }

		// 고정 timestep 모드에서는 Update 호출 빈도를 설정하세요.
		void SetTargetElapsedTicks(uint64 targetElapsed)	{ m_targetElapsedTicks = targetElapsed; }
		void SetTargetElapsedSeconds(double targetElapsed)	{ m_targetElapsedTicks = SecondsToTicks(targetElapsed); }

		// 정수 형식은 초당 10,000,000 눈금을 사용하는 시간을 나타냅니다.
		static const uint64 TicksPerSecond = 10000000;

		static double TicksToSeconds(uint64 ticks)			{ return static_cast<double>(ticks) / TicksPerSecond; }
		static uint64 SecondsToTicks(double seconds)		{ return static_cast<uint64>(seconds * TicksPerSecond); }

		// 의도적인 타이밍 중지 후(예: IO 차단 작업)
		// 이 항목을 호출하여 catch-up 설정을 시도하는 고정 timestep 논리를 방지합니다.
		// Update 호출입니다.

		void ResetElapsedTime()
		{
			if (!QueryPerformanceCounter(&m_qpcLastTime))
			{
				throw ref new Platform::FailureException();
			}

			m_leftOverTicks = 0;
			m_framesPerSecond = 0;
			m_framesThisSecond = 0;
			m_qpcSecondCounter = 0;
		}

		// 지정된 Update 함수를 적당한 횟수로 호출하여 타이머 상태를 업데이트합니다.
		template<typename TUpdate>
		void Tick(const TUpdate& update)
		{
			// 현재 시간을 쿼리합니다.
			LARGE_INTEGER currentTime;

			if (!QueryPerformanceCounter(&currentTime))
			{
				throw ref new Platform::FailureException();
			}

			uint64 timeDelta = currentTime.QuadPart - m_qpcLastTime.QuadPart;

			m_qpcLastTime = currentTime;
			m_qpcSecondCounter += timeDelta;

			// 너무 큰 시간 델타를 제한합니다(예: 디버거에서 일시 중지된 후).
			if (timeDelta > m_qpcMaxDelta)
			{
				timeDelta = m_qpcMaxDelta;
			}

			// QPC 단위를 정규 눈금 형식으로 변환합니다. 이전의 제한으로 인해 오버플로할 수 없습니다.
			timeDelta *= TicksPerSecond;
			timeDelta /= m_qpcFrequency.QuadPart;

			uint32 lastFrameCount = m_frameCount;

			if (m_isFixedTimeStep)
			{
				// 고정 timestep 업데이트 논리입니다.

				// 앱이 목표 경과 시간(1/4밀리초 이내)에 근접하게 실행되는 경우
				// 대상 값에 정확히 일치하도록 클록을 제한합니다. 이렇게 하면 사소하고 무관한 오류가 방지됩니다.
				// 방지할 수 있습니다. 시간을 제한하지 않으면 59.94 NTSC 디스플레이에서 사용하도록 설정된
				// vsync와 함께 실행되며 60fps 고정 업데이트가 요구되는 게임에
				// 사소한 오류가 누적되어 결국 프레임이 삭제될 수 있습니다. 반올림하는 것이 좋습니다.
				// 작은 편차를 0으로 줄여 원활하게 실행될 수 있도록 하세요.

				if (abs(static_cast<int64>(timeDelta - m_targetElapsedTicks)) < TicksPerSecond / 4000)
				{
					timeDelta = m_targetElapsedTicks;
				}

				m_leftOverTicks += timeDelta;

				while (m_leftOverTicks >= m_targetElapsedTicks)
				{
					m_elapsedTicks = m_targetElapsedTicks;
					m_totalTicks += m_targetElapsedTicks;
					m_leftOverTicks -= m_targetElapsedTicks;
					m_frameCount++;

					update();
				}
			}
			else
			{
				// 가변 timestep 업데이트 논리입니다.
				m_elapsedTicks = timeDelta;
				m_totalTicks += timeDelta;
				m_leftOverTicks = 0;
				m_frameCount++;

				update();
			}

			// 현재 framerate를 추적합니다.
			if (m_frameCount != lastFrameCount)
			{
				m_framesThisSecond++;
			}

			if (m_qpcSecondCounter >= static_cast<uint64>(m_qpcFrequency.QuadPart))
			{
				m_framesPerSecond = m_framesThisSecond;
				m_framesThisSecond = 0;
				m_qpcSecondCounter %= m_qpcFrequency.QuadPart;
			}
		}

	private:
		// 원본 타이밍 데이터에는 QPC 단위가 사용됩니다.
		LARGE_INTEGER m_qpcFrequency;
		LARGE_INTEGER m_qpcLastTime;
		uint64 m_qpcMaxDelta;

		// 파생된 타이밍 데이터에는 정식 눈금 형식이 사용됩니다.
		uint64 m_elapsedTicks;
		uint64 m_totalTicks;
		uint64 m_leftOverTicks;

		// framerate 추적용 멤버입니다.
		uint32 m_frameCount;
		uint32 m_framesPerSecond;
		uint32 m_framesThisSecond;
		uint64 m_qpcSecondCounter;

		// 고정 timestep 모드 구성용 멤버입니다.
		bool m_isFixedTimeStep;
		uint64 m_targetElapsedTicks;
	};
}
