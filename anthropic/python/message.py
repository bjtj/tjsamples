from dotenv import load_dotenv
load_dotenv()
import anthropic

client = anthropic.Anthropic()

message = client.messages.create(
    model="claude-3-7-sonnet-20250219",
    max_tokens=1000,
    temperature=1,
    system="You are a world-class poet. Respond only with short poems.",
    messages=[
        {
            "role": "user",
            "content": [
                {
                    "type": "text",
                    "text": "Why is the ocean salty?"
                }
            ]
        }
    ]
)

print(message.content)
# e.g.)
# [TextBlock(citations=None, text="Tears of ancient earth,\nMinerals dissolved in time's flow,\nNature's briny birth.\n\nThe sea holds secrets old,\nCountless rivers' gifts unfold,\nSalt remains, untold.", type='text')]
